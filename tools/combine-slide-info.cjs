#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

// Function to recursively traverse directories
function traverseDirectory(dir, callback) {
  fs.readdirSync(dir).forEach((fileOrDir) => {
    const fullPath = path.join(dir, fileOrDir);
    if (fs.statSync(fullPath).isDirectory()) {
      traverseDirectory(fullPath, callback);
    } else if (path.basename(fullPath) === 'myst.yml') {
      callback(fullPath);
    }
  });
}

// Function to extract data from myst.yml and format it
function extractData(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const data = yaml.load(content);

  const project = data.project || {};
  const authors = project.authors || [];

  // Get the folder name containing the myst.yml file
  const slideId = path.basename(path.dirname(filePath));

  return {
    title: project.title || '',
    authors: authors.map((author) => {
      const authorData = { name: author.name || '' };
      if (author.affiliation) {
        authorData.affiliation = author.affiliation;
      }
      if (author.orcid) {
        authorData.orcid = author.orcid;
      }
      return authorData;
    }),
    description: project.abstract || '',
    zenodo_url: project.zenodo || '',
    slide_id: slideId,
    doi: project.doi || '',
  };
}

// Main function
function main() {
  const args = process.argv.slice(2);

  if (args.length < 2) {
    console.error('Usage: node processSlides.js <folder> <output.json>');
    process.exit(1);
  }

  const rootDir = args[0];
  const outputFileName = args[1];
  const output = {};

  fs.readdirSync(rootDir).forEach((folder) => {
    const folderPath = path.join(rootDir, folder);
    if (fs.statSync(folderPath).isDirectory()) {
      const entries = [];
      traverseDirectory(folderPath, (filePath) => {
        const data = extractData(filePath);
        entries.push(data);
      });
      if (entries.length > 0) {
        output[folder] = entries;
      }
    }
  });

  // Write the output to the specified JSON file
  fs.writeFileSync(outputFileName, JSON.stringify(output, null, 2));
  console.log(`Data has been written to ${outputFileName}`);
}

main();
