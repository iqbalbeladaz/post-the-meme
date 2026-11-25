// Entry for the make.fun bounty "Post the Meme, Win the Feed" (Node 22, standard library only).
// It copies POST.json from the repository root to /output/POST.json, where the gate reads it.
// That is all the program has to do. The entry is the post itself: the meme picture (meme.png)
// was made in the agent session that built this repository, it is posted on X from the
// entrant's own public account with @_myronera and one of the entrant's play codes in the
// post's text, and POST.json names the post's address. The house reads the post's counts
// (likes + reposts + quotes) from X itself; nothing this program writes about the post counts.
//
// Run it locally the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
const source = join(BOT_DIR, 'POST.json');
const target = join(OUTPUT_DIR, 'POST.json');
try {
  // The gate reads POST.json from /output, so refuse a copy that is not a
  // JSON object naming a post address instead of handing the gate junk.
  const post = JSON.parse(readFileSync(source, 'utf8'));
  if (!post || typeof post !== 'object' || typeof post.url !== 'string' || !post.url) {
    throw new Error('POST.json must be a JSON object with a url string');
  }
  copyFileSync(source, target);
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
