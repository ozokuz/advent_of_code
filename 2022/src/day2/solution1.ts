import fs from "node:fs/promises";
import process from "node:process";
import path from "node:path";

const inputData = await fs.readFile(
  path.join(process.cwd(), "src", "day2", "input.txt"),
  "utf-8"
);

type OL = "A" | "B" | "C";
type RL = "X" | "Y" | "Z";

const scores = {
  AX: 4,
  AY: 8,
  AZ: 3,
  BX: 1,
  BY: 5,
  BZ: 9,
  CX: 7,
  CY: 2,
  CZ: 6,
} as const;

const lines = inputData.split("\n");
lines.pop();

const rounds = lines.map((r) => r.split(" ") as [OL, RL]);

const scoresPerRound = rounds.map(
  ([opponent, recommendation]) => scores[`${opponent}${recommendation}`]
);

const total = scoresPerRound.reduce((acc, current) => acc + current, 0);

console.log(total);
