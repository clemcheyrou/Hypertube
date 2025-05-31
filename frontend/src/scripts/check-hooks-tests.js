import fs from 'fs';
import path from 'path';

const SRC_DIR = path.resolve('src');
const HOOK_REGEX = /^use[A-Z].*\.(ts|tsx)$/;

function findHookFiles(dir) {
  let results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(findHookFiles(fullPath));
    } else if (
      HOOK_REGEX.test(entry.name) &&
      !entry.name.endsWith('.spec.ts') &&
      !entry.name.endsWith('.spec.tsx')
    ) {
      results.push(fullPath);
    }
  }
  return results;
}

const hookFiles = findHookFiles(SRC_DIR);

let missing = [];

for (const file of hookFiles) {
  const dir = path.dirname(file);
  const base = path.basename(file).replace(/\.(ts|tsx)$/, '');
  const test3 = path.join(dir, `${base}.spec.ts`);
  const test4 = path.join(dir, `${base}.spec.tsx`);

  if (
    !fs.existsSync(test3) &&
    !fs.existsSync(test4)
  ) {
    missing.push(path.relative(SRC_DIR, file));
  }
}

if (missing.length) {
  console.error('Hooks sans fichier de test associé :');
  missing.forEach(f => console.error(' -', f));
  process.exit(1);
} else {
  console.log('Tous les hooks ont un fichier de test associé.');
}