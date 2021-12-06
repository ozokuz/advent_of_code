const input = Deno.readTextFileSync("input.txt").split("\n").map(Number);

let last = input[0];
let increases = 0;

for (const number of input) {
  if (number > last) increases++;
  last = number;
}

console.log(increases);

let a = input[0] + input[1] + input[2];
let inc = 0;

for (let i = 0; i < input.length - 2; i++) {
  const sum = input[i] + input[i + 1] + input[i + 2];
  if (sum > a) inc++;
  a = sum;
}

console.log(inc);
