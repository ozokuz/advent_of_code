const input = Deno.readTextFileSync("input.txt").split("\n");

type CommandType = "forward" | "up" | "down";
type Command = [CommandType, number];

const commands = input.map((c) => {
  const [command, amount] = c.split(" ");
  return [command, Number(amount)] as Command;
});

let depth = 0;
let position = 0;

for (const [type, amount] of commands) {
  switch (type) {
    case "forward":
      position += amount;
      continue;
    case "up":
      depth -= amount;
      continue;
    case "down":
      depth += amount;
      continue;
  }
}

console.log(depth * position);

let aim = 0;
depth = 0;
position = 0;

for (const [type, amount] of commands) {
  switch (type) {
    case "forward":
      position += amount;
      depth += aim * amount;
      continue;
    case "up":
      aim -= amount;
      continue;
    case "down":
      aim += amount;
      continue;
  }
}

console.log(depth * position);
