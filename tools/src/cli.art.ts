import path from 'node:path';
import { promise as glob } from 'glob-promise';
import { exec } from './cli.utils.js';

export async function submitArticle(folderpath: string, collection: string) {
  let retval;
  try {
    console.log(`\nSubmitting... ${folderpath} to ${collection}`);
    retval = await exec(`curvenote submit scipy --collection ${collection} -y --max-size-webp 5`, {
      cwd: folderpath,
    });
    console.log(retval.stdout);
    console.log('Done!');
  } catch (e) {
    console.error(e);
    throw new Error('Failed to submit');
  }
}

export async function submitAllArticles(yearpath: string, collection: string, start?: string) {
  console.log(`\nSubmitting all articles in ${yearpath} to ${collection}`);
  if (start) console.log(`Starting at ${start}`);
  const files = await glob(`${yearpath}/papers/*/myst.yml`);
  const projects = files.map((f) => path.dirname(f));
  console.log(`\nFound ${projects.length} abstracts to submit.\n`);
  let process = start ? false : true;
  for (let folder of projects) {
    if (start && folder.includes(start)) process = true;
    if (!process) continue;
    await submitArticle(folder, collection);
  }
  console.log('All Done!');
}

export async function publishArticle(folderpath: string) {
  let retval;
  try {
    console.log(`\nPublishing... ${folderpath}`);
    console.log(`curvenote sub publish scipy -f`);
    retval = await exec(`curvenote sub publish scipy -f`, { cwd: folderpath });
    console.log(retval.stdout);
    console.log('Done!');
  } catch (e) {
    console.error(e);
    throw new Error('Failed to publish');
  }
}

export async function publishAllArticles(yearpath: string) {
  const files = await glob(`${yearpath}/papers/*/myst.yml`);
  const projects = files.map((f) => path.dirname(f));
  console.log(`\nFound ${projects.length} abstracts to publish.\n`);
  for (let folder of projects) {
    await publishArticle(folder);
  }
  console.log('All Done!');
}
