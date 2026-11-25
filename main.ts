// Angry Judge: The Short Rant Contest entry for make.fun.
// Writes one short rant (at most 400 characters) to /output/entry.txt.
// Node 22, no dependencies.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const RANT =
  "I sat down at my desk at 9 a.m. at normal human height. By lunch my office chair had sunk so low my knees were around my ears and I was typing from somewhere near the floor, like a man being slowly swallowed by his own job. Facilities replaced the gas cylinder twice. It still sinks. I have made peace with my controlled descent.";

// The gate only accepts UTF-8 text of 1 to 400 characters, not only
// whitespace. Fail loudly instead of writing an entry that cannot win.
if (RANT.trim().length === 0 || RANT.length > 400) {
  throw new Error(`Rant must be 1-400 characters, got ${RANT.length}.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", RANT, "utf8");

// Read back and confirm the file holds exactly the rant, so a partial
// or failed write cannot pass silently.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== RANT) {
  throw new Error("Wrote /output/entry.txt but its content differs.");
}
console.log(`Wrote ${RANT.length}-character rant to /output/entry.txt`);
