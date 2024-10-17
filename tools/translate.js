#!/usr/bin/env node

/**
 * This translates from `info.json` to `myst.yml` for an entire folder of presentations
 *
 * ```bash
 * cd presentations/keynotes
 * node tools/translate.js scipy2024/presentations/keynotes
 * ```
 *
 * Feel free to delete the `info.json` files after.
 */

const fs = require('fs').promises;
const path = require('path');
const yaml = require('js-yaml');
const uuid = require('uuid');

// Get command line arguments
const args = process.argv.slice(2);

// Expected usage: processFolder <folder> --type <type>
if (args.length < 2) {
  console.error('Usage: processFolder <folder> --type <type>');
  process.exit(1);
}

const folderIndex = args.findIndex((arg) => !arg.startsWith('-'));
if (folderIndex === -1) {
  console.error('Folder argument is required.');
  process.exit(1);
}

const folder = args[folderIndex];
const typeIndex = args.findIndex((arg) => arg === '--type');
if (typeIndex === -1 || typeIndex + 1 >= args.length) {
  console.error('--type option is required.');
  process.exit(1);
}

const type = args[typeIndex + 1];

console.log('Processing folder:', folder);
console.log('Type:', type);

// Now process the folder
async function processFolder() {
  try {
    const entries = await fs.readdir(folder, { withFileTypes: true });

    const subfolders = entries.filter((entry) => entry.isDirectory()).map((entry) => entry.name);

    for (const subfolder of subfolders) {
      const subfolderPath = path.join(folder, subfolder);

      // Read info.json
      const infoPath = path.join(subfolderPath, 'info.json');
      const mystYmlPath = path.join(subfolderPath, 'myst.yml');

      if (
        await fs
          .access(mystYmlPath)
          .then(() => true)
          .catch(() => false)
      ) {
        console.log(`${mystYmlPath} already exists, skipping`);
        continue;
      }

      let data;
      try {
        data = await fs.readFile(infoPath, 'utf8');
      } catch (err) {
        console.error(`Error reading info.json in ${subfolder}:`, err);
        continue;
      }

      let info;
      try {
        info = JSON.parse(data);
      } catch (e) {
        console.error(`Error parsing info.json in ${subfolder}:`, e);
        continue;
      }

      // Extract needed information
      const title = info.title || '';
      const description = info.description || '';
      const authors = info.authors || [];

      // Find the PDF file in the folder
      const files = await fs.readdir(subfolderPath);
      const pdfFiles = files.filter((file) => path.extname(file).toLowerCase() === '.pdf');
      const keyFiles = files.filter((file) => path.extname(file).toLowerCase() === '.key');
      const pptxFiles = files.filter((file) => path.extname(file).toLowerCase() === '.pptx');

      if (pdfFiles.length === 0) {
        console.error(`No PDF file found in ${subfolder}`);
        continue;
      } else if (pdfFiles.length > 1) {
        console.error(`Multiple PDF files found in ${subfolder}`);
        continue;
      }

      const pdfFile = pdfFiles[0];

      // Create myst.yml content
      const mystData = {
        version: 1,
        extends: '../../proceedings.yml',
        project: {
          id: uuid.v4(),
          title: title,
          authors: authors.map((author) => {
            let authorData = {
              name: author.name,
              affiliation: author.affiliation,
            };
            if (author.orcid?.trim()) {
              authorData.orcid = author.orcid.trim();
            }
            return authorData;
          }),
          abstract: description,
          downloads: [
            {
              title: type,
              file: pdfFile,
            },
            ...keyFiles.map((file) => ({ title: 'Keynote File', file })),
            ...pptxFiles.map((file) => ({ title: 'Powerpoint File', file })),
          ],
        },
      };

      // Write myst.yml
      const mystYmlContent = yaml.dump(mystData, { lineWidth: -1 });
      try {
        await fs.writeFile(mystYmlPath, mystYmlContent, 'utf8');
        console.log(`myst.yml written in ${subfolder}`);
      } catch (err) {
        console.error(`Error writing myst.yml in ${subfolder}:`, err);
        continue;
      }
    }
  } catch (err) {
    console.error('Error processing folder:', err);
    process.exit(1);
  }
}

processFolder();
