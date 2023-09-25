import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const inputData = await fs.readFile(
  path.join(process.cwd(), "src", "day5", "input.txt"),
  "utf-8"
);

const [piles, operations] = inputData.split("\n\n").map((v) => v.split("\n"));
operations!.pop();

const parseOperation = (opStr: string) => {
  const [, amount, , from, , to] = opStr.split(" ");

  return {
    amount: parseInt(amount!, 10),
    from: parseInt(from!, 10) - 1,
    to: parseInt(to!, 10) - 1,
  };
};

type Operation = ReturnType<typeof parseOperation>;

const columns = piles!
  .pop()!
  .split("")
  .filter((v) => v !== " ").length;

const ops = operations!.map(parseOperation);

const stacks = Array.from({ length: columns }, () => [] as string[]);
for (const row of piles!) {
  for (let i = 1; i <= piles![0]!.length; i += 4) {
    if (row[i] === " ") continue;

    const col = (i - (i % 4)) / 4;

    stacks[col]!.push(row[i]!);
  }
}

console.log(stacks);

const move = (piles: string[][], operation: Operation) => {
  const { from, to } = operation;

  const fromPile = piles[from]!;
  const toPile = piles[to]!;

  const toMove = fromPile.shift();

  toPile.unshift(toMove!);
};

const doOperation = (piles: string[][], operation: Operation) => {
  for (let i = 0; i < operation.amount; i++) {
    move(piles, operation);
  }
};

for (const op of ops) {
  doOperation(stacks, op);
}

console.log(stacks.map((s) => s[0]));
