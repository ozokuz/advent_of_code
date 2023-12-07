import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { cwd } from "node:process";

const filePath = join(cwd(), "..", "..", "inputs", "1.txt");
const contents = await readFile(filePath, "utf-8");
const calibrationData = contents.split("\n");
const numbers = "123456789".split("");
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

const isNum = (n: string) => numbers.includes(n);
const num = (n: string) => +n;

type Matcher = (line: string) => number[];

function sum(matcher: Matcher): number {
  let total = 0;

  for (const value of calibrationData) {
    const digits = matcher(value);

    const first = digits[0];
    const last = digits[digits.length - 1];

    total += first * 10 + last;
  }

  return total;
}

const part1: Matcher = (line) => {
  return line.split("").filter(isNum).map(num);
};

function parseValue(value: string): number {
  if (isNum(value)) return num(value);

  return words.indexOf(value) + 1;
}

const part2: Matcher = (line) => {
  if (line === "") return [];

  const digit = tests.find((x) => line.startsWith(x));
  if (!digit) return part2(line.slice(1));

  const parsed = parseValue(digit);
  return [parsed].concat(part2(line.slice(Math.max(1, digit.length - 1))));
};

console.log("Solution 1:", sum(part1));
console.log("Solution 2:", sum(part2));
