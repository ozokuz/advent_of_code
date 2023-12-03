import os

with open(os.path.join(os.getcwd(), "..", "..", "..", "inputs", "1.txt"), "r") as file:
    contents = file.read()

calibrationData = contents.split("\n")
numbers = list("1234567890")
words = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
tests = numbers + words

total = 0

for value in calibrationData:
    firstPos = len(value) + 20
    first = ""
    for test in tests:
        pos = value.find(test)
        if pos < 0:
            continue
        if firstPos < pos:
            continue
        firstPos = pos
        first = test

    lastPos = -1
    last = ""
    for test in tests:
        pos = value.rfind(test)
        if pos < 0:
            continue
        if lastPos > pos:
            continue
        lastPos = pos
        last = test

    if first in words:
        first = str(words.index(first) + 1)
    if last in words:
        last = str(words.index(last) + 1)

    digits = first + last
    total += int(digits)

print(total)
