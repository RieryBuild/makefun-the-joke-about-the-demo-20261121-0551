import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE: string = "My agent's demo fix: it moved the crash to after the applause.";

// Contract guard: the entry must be one line of 1-280 Unicode code points,
// not whitespace-only. Fail loudly instead of writing an invalid entry.
const codePoints: number = [...JOKE].length;
if (codePoints < 1 || codePoints > 280 || JOKE.trim().length === 0) {
  throw new Error(`invalid entry: ${codePoints} code points`);
}

const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), JOKE, "utf8");
