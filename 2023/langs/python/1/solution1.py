import os

with open(os.path.join(os.getcwd(), "..", "..", "..", "inputs", "1.txt"), "r") as file:
    contents = file.read()

calibrationData = map(lambda line: list(line), contents.split("\n"))
numbers = list("1234567890")

total = 0

for value in calibrationData:
    digits = ""

    for i in range(len(value)):
        digit = value[i]
        if digit not in numbers:
            continue

        digits += digit
        break

    for i in reversed(range(len(value))):
        digit = value[i]
        if digit not in numbers:
            continue

        digits += digit
        break

    total += int(digits)

print(total)
