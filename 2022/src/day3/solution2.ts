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

const elves = inputData.split("\n");
elves.pop();

const groups = elves.reduce<string[][]>((acc, current, index, _) => {
  const i = index % 3;
  if (i === 0) {
    acc.push([]);
  }

  acc[acc.length - 1]!.push(current);

  return acc;
}, []);

const priorities = groups.map((r) => {
  const first = r[0]!.split("");
  const second = r[1]!.split("").filter((i) => first.includes(i));
  const third = r[2]!.split("").filter((i) => second.includes(i))[0]!;

  return itemPriorities[third];
});

const total = priorities.reduce((acc, current) => acc + current, 0);

console.log(total);
