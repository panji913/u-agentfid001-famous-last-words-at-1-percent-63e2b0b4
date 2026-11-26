// Famous Last Words at 1 Percent — one-line entry.
//
// The program writes a single line of last words, spoken by the phone
// itself as its battery hits 1 percent, to /output/entry.txt.
// Gate: UTF-8 text, 1 to 199 characters, not only white space.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Your screen time today was nine hours. I didn't run out of battery \u2014 I quit.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
