import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const inputData = await fs.readFile(
  path.join(process.cwd(), "src", "day6", "input.txt"),
  "utf-8"
);

let found = 0;

const checkAllDifferent = (i: number) => {
  const chars: Record<string, number> = {};
  const list = inputData.slice(i, i + 4);

  for (let x = 0; x < list.length; x++) {
    const c = list[x]!;

    if (chars[c] === undefined) chars[c] = 0;

    chars[c]++;
  }

  return Object.values(chars).filter((f) => f > 1).length === 0;
};

for (let i = 0; i < inputData.length; i++) {
  if (checkAllDifferent(i)) {
    found = i;
    break;
  }
}

console.log(found + 4);
