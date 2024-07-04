import { exec as execCb } from 'node:child_process';
import util from 'node:util';
import { unified } from 'unified';
import parse from 'rehype-parse';

export const exec = util.promisify(execCb);

export const processor = unified().use(parse, { fragment: true });
