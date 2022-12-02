import fs from "node:fs/promises";
import process from "node:process";
import path from "node:path";

const inputData = await fs.readFile(
  path.join(process.cwd(), "src", "day2", "input.txt"),
  "utf-8"
);

const scores = {
  A: 1,
  B: 2,
  C: 3,
  X: 1,
  Y: 2,
  Z: 3,
} as const;

const results = {
  [-1]: 6,
  [2]: 6,
  [0]: 3,
  [-2]: 0,
  [1]: 0,
} as const;

const lines = inputData.split("\n");
lines.pop();

const rounds = lines.map(
  (r) => r.split(" ") as [keyof typeof scores, keyof typeof scores]
);

const scoresPerRound = rounds.map(
  ([opponent, recommendation]) =>
    results[
      (scores[opponent] - scores[recommendation]) as keyof typeof results
    ] + scores[recommendation]
);

const total = scoresPerRound.reduce((acc, current) => acc + current, 0);

console.log(total);
