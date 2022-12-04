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

const overlaps = (a: Pair<number>, b: number) => {
  return a[0] <= b && a[1] >= b;
};

const overlapping = parsedPairs.filter(
  (pair) =>
    overlaps(pair[0], pair[1][0]) ||
    overlaps(pair[0], pair[1][1]) ||
    overlaps(pair[1], pair[0][0]) ||
    overlaps(pair[1], pair[0][1])
).length;

console.log(overlapping);
