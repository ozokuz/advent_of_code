import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { cwd } from "node:process";

const filePath = join(cwd(), "..", "..", "..", "inputs", "1.txt");
const contents = await readFile(filePath, "utf-8");
const calibrationData = contents.split("\n");
const numbers = "1234567890".split("");

let total = 0;

for (const value of calibrationData) {
  let digits = "";
  for (let i = 0; i < value.length; i++) {
    const digit = value[i];
    if (!numbers.includes(digit)) continue;

    digits += digit;
    break;
  }

  for (let i = value.length - 1; i >= 0; i--) {
    const digit = value[i];
    if (!numbers.includes(digit)) continue;

    digits += digit;
    break;
  }

  total += +digits;
}

console.log(total);
