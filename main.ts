import { mkdirSync, writeFileSync } from "node:fs";

// The entry: one sentence, an alien tourist's one-star review of Earth
// that still compliments the food. Deadpan outsider complaints (exhausting
// gravity, indecisive weather, locals breathing the sky) set up the turn:
// the street noodles alone justify a 40-light-year trip.
const line =
  "One star: the gravity is exhausting, the weather changes its mind hourly, and the locals breathe the sky — but the street noodles alone justify the 40-light-year trip.";

const outputPath = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(outputPath, line, "utf8");
console.log(`Wrote ${line.length} characters to ${outputPath}`);
