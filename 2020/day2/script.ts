interface PasswordPolicy {
  num1: number;
  num2: number;
  char: string;
}

function checkPasswordValidityPart1(password: string, policy: PasswordPolicy) {
  let timesFound = 0;
  for (let i = 0; i < password.length; i++) {
    if (password[i] === policy.char) timesFound++;
  }
  return timesFound >= policy.num1 && timesFound <= policy.num2;
}

function checkPasswordValidityPart2(password: string, policy: PasswordPolicy) {
  const n1 = password[policy.num1 - 1] === policy.char;
  const n2 = password[policy.num2 - 1] === policy.char;
  if (n1 && !n2) return true;
  if (!n1 && n2) return true;
  return false;
}

function parsePasswordWithPolicy(
  passwordWithPolicy: string
): [string, PasswordPolicy] {
  const [policyInfo, password] = passwordWithPolicy.split(":");
  const [minMax, char] = policyInfo.split(" ");
  const [num1, num2] = minMax.split("-").map(Number);

  return [password.trimStart(), { num1, num2, char }];
}

function getValidPasswordCount(
  passwords: string[],
  validator: (password: string, policy: PasswordPolicy) => boolean
) {
  return passwords
    .map(parsePasswordWithPolicy)
    .map((p) => validator(...p))
    .filter(Boolean).length;
}

const input = Deno.readTextFileSync("input.txt").split("\n");
console.log(getValidPasswordCount(input, checkPasswordValidityPart1));
console.log(getValidPasswordCount(input, checkPasswordValidityPart2));
