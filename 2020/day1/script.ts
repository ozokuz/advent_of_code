const input = Deno.readTextFileSync("input.txt")
  .split("\n")
  .map((n) => Number(n));

function getNumbersThatSumToTotal(
  list: number[],
  amountOfNumbers: number,
  total: number,
  startIndex = 0
): [number, number[]] {
  if (amountOfNumbers === 1) {
    if (list.includes(total)) return [total, [total]];
    return [0, []];
  }
  for (let i = startIndex; i < list.length; i++) {
    const num = list[i];
    const [sum, numbers] = getNumbersThatSumToTotal(
      list,
      amountOfNumbers - 1,
      total - num,
      i + 1
    );
    const complete = num + sum;
    if (complete === total) return [complete, [num, ...numbers]];
  }
  return [0, []];
}

function multiplyTogether(nums: number[]) {
  return nums.reduce((acc, curr) => acc * curr, 1);
}

console.log(
  "Part 1:",
  multiplyTogether(getNumbersThatSumToTotal(input, 2, 2020)[1])
);
console.log(
  "Part 2:",
  multiplyTogether(getNumbersThatSumToTotal(input, 3, 2020)[1])
);
