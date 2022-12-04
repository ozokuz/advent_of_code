import fs from "node:fs/promises";
import process from "node:process";
import path from "node:path";

const inputData = await fs.readFile(
  path.join(process.cwd(), "src", "day3", "input.txt"),
  "utf-8"
);

const lowercase = Array.from({ length: 26 }, (_, i) => i + 97).map((p, i) => [
  String.fromCharCode(p),
  i + 1,
]);
const uppercase = Array.from({ length: 26 }, (_, i) => i + 65).map((p, i) => [
  String.fromCharCode(p),
  i + 1 + 26,
]);

const itemPriorities = Object.fromEntries(lowercase.concat(uppercase));

const rucksacks = inputData.split("\n");
rucksacks.pop();

const priorities = rucksacks.map((r) => {
  const halfLength = r.length / 2;

  const leftCompartment = r.slice(0, halfLength).split("");

  const found = r
    .slice(halfLength)
    .split("")
    .filter((i) => leftCompartment.includes(i))[0]!;

  return itemPriorities[found];
});

const total = priorities.reduce((acc, current) => acc + current, 0);

console.log(total);
