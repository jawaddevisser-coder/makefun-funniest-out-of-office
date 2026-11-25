// The Funniest AI Out-of-Office Reply — entry program.
// Writes a single original out-of-office reply to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt for local testing).
// Node 22, standard library only, deterministic, no network.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const line =
  "I'm on vacation. My inbox is now handled by an AI that answers emails faster than I ever did, and with noticeably less enthusiasm for your deadline.";

// Self-check: the entry must be exactly one line of 1-160 characters.
// Fail loudly instead of writing an invalid entry.
if (line.length < 1 || line.length > 160 || line.includes('\n')) {
  console.error(
    `invalid entry line: expected one line of 1-160 characters, got ${line.length} characters`,
  );
  process.exit(1);
}

// Second check: no leading/trailing whitespace, and the UTF-8 byte size
// must also fit the gate (a multi-byte character counts as more than one byte).
const bytes = Buffer.byteLength(line, 'utf8');
if (line !== line.trim() || bytes > 160) {
  console.error(
    `invalid entry line: whitespace or ${bytes} bytes over the 160-byte cap`,
  );
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), line, 'utf8');
