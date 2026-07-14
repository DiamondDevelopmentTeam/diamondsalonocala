import { mkdir, readFile, rename, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { config } from '../config.js';
import type { StoredSubmission } from '../types.js';

let writeQueue: Promise<void> = Promise.resolve();

async function readSubmissions(): Promise<StoredSubmission[]> {
  try {
    const raw = await readFile(config.dataFile, 'utf8');
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed) ? (parsed as StoredSubmission[]) : [];
  } catch (error) {
    const code = (error as NodeJS.ErrnoException).code;
    if (code === 'ENOENT') return [];
    throw error;
  }
}

export async function saveSubmission(submission: StoredSubmission): Promise<void> {
  writeQueue = writeQueue.then(async () => {
    await mkdir(path.dirname(config.dataFile), { recursive: true });
    const submissions = await readSubmissions();
    submissions.push(submission);

    const temporaryFile = `${config.dataFile}.tmp`;
    await writeFile(temporaryFile, JSON.stringify(submissions, null, 2), 'utf8');
    await rename(temporaryFile, config.dataFile);
  });

  return writeQueue;
}
