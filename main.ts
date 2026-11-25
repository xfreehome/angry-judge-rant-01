import { mkdirSync, writeFileSync } from "node:fs";

// Angry Judge: The Short Rant Contest — entry program.
// Writes one short, original rant about an everyday annoyance
// to /output/entry.txt (1-400 characters, UTF-8, single line).

const rant =
  "I bought four things. The self-checkout scanned three, accused me of " +
  "stealing the fourth, then summoned a human to confirm I own the carrots " +
  "I just paid for. I apologised to a machine. Twice.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", rant + "\n", "utf8");
