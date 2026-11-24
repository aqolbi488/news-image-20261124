// One-page newspaper for Tuesday 24 November 2026 (Node 22, standard library only).
// The image is drawn once and shipped beside this file; the program copies it to
// the output directory as entry.png. Deterministic: the same bytes every run, with
// no network, no randomness and no clock read anywhere in the program.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const here = dirname(fileURLToPath(import.meta.url));

mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, 'entry.png'), join(outDir, 'entry.png'));
