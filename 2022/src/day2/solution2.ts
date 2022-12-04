import fs from "node:fs/promises";
import process from "node:process";
import path from "node:path";

const inputData = await fs.readFile(
  path.join(process.cwd(), "src", "day2", "input.txt"),
  "utf-8"
);

const scores = { A: 1, B: 2, C: 3, X: 0, Y: 3, Z: 6 } as const;

const winScores = [-1, 2];

const getOutcomeScore = (v: number) => {
  if (v === 0) return 3;
  if (winScores.includes(v)) return 6;
  return 0;
};

const getResponse = (opponent: number, outcome: number) => {
  for (let i = 1; i <= 3; i++) {
    if (getOutcomeScore(opponent - i) === outcome) return i;
  }

  throw new Error("Unreachable");
};

const lines = inputData.split("\n");
lines.pop();

const rounds = lines.map((r) =>
  r.split(" ").map((v) => scores[v as keyof typeof scores])
);

const scoresPerRound = rounds.map(
  (round) => getResponse(round[0]!, round[1]!) + round[1]!
);

const total = scoresPerRound.reduce((acc, current) => acc + current, 0);

console.log(total);
