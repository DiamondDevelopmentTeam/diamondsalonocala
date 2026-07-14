import { rm } from 'node:fs/promises';

for (const path of ['client/dist', 'server/dist']) {
  await rm(path, { recursive: true, force: true });
}

console.log('Build folders removed.');
