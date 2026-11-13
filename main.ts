// ai-happy-01 entry (Node 22, standard library only).
// The image is entry.png beside this file; the program copies it to
// /output/entry.png. The gate takes a whole PNG or JPEG of at most
// 1 MiB and 1024 by 1024 pixels, and the judge sees exactly these bytes.
//
// Local run: MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
