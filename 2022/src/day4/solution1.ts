import fs from "node:fs/promises";
import process from "node:process";
import path from "node:path";

const inputData = await fs.readFile(
  path.join(process.cwd(), "src", "day4", "input.txt"),
  "utf-8"
);

const pairs = inputData.split("\n");
pairs.pop();

type Pair<T> = [T, T];

const parsedPairs = pairs.map(
  (pair) =>
    pair
      .split(",")
      .map((elf) =>
        elf.split("-").map((section) => parseInt(section, 10))
      ) as Pair<Pair<number>>
);

const fullyContains = (a: Pair<number>, b: Pair<number>) => {
  return a[0] <= b[0] && a[1] >= b[1];
};

const fullyContaining = parsedPairs.filter(
  (pair) => fullyContains(pair[0], pair[1]) || fullyContains(pair[1], pair[0])
).length;

console.log(fullyContaining);
