import fs from "node:fs/promises";
import process from "node:process";
import path from "node:path";

const inputData = await fs.readFile(
  path.join(process.cwd(), "src", "day1", "input.txt"),
  "utf-8"
);

const groupedData = inputData.split("\n\n");
const caloriesByElves = groupedData.map((v) =>
  v.split("\n").map((v) => parseInt(v, 10))
);
const totalCaloriesByElves = caloriesByElves.map((v) =>
  v.reduce((acc, current) => acc + current, 0)
);

console.log(Math.max(...totalCaloriesByElves));
