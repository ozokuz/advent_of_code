import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { cwd } from "node:process";

const filePath = join(cwd(), "..", "input.txt");
const contents = await readFile(filePath, "utf-8");
const calibrationData = contents.split("\n");
const numbers = "1234567890".split("");
const words = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
const tests = [...numbers, ...words];

let total = 0;

for (const value of calibrationData) {
  let firstPos = value.length + 20;
  let first = "";
  for (const test of tests) {
    const pos = value.indexOf(test);
    if (pos < 0) continue;
    console.log(value, test);
    if (firstPos < pos) continue;
    firstPos = pos;
    first = test;
  }

  let lastPos = -1;
  let last = "";
  for (const test of tests) {
    const pos = value.lastIndexOf(test);
    if (pos < 0) continue;
    if (lastPos > pos) continue;
    lastPos = pos;
    last = test;
  }

  if (words.includes(first)) first = words.indexOf(first) + 1;
  if (words.includes(last)) last = words.indexOf(last) + 1;

  let digits = "";
  digits += first;
  digits += last;
  total += +digits;
}

console.log(total);
