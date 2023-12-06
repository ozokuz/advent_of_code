package main

import (
	"log"
	"slices"
	"strconv"
	"strings"
)

func solution2(calibrationData []string) int {
	numbers := strings.Split("1234567890", "")
	words := []string{"one", "two", "three", "four", "five", "six", "seven", "eight", "nine"}
	tests := append(append([]string{}, numbers[:]...), words[:]...)

	total := 0

	for _, value := range calibrationData {
		firstPos := len(value) + 20
		first := ""
		for _, test := range tests {
			pos := strings.Index(value, test)
			if pos < 0 || firstPos < pos {
				continue
			}
			firstPos = pos
			first = test
		}

		lastPos := -1
		last := ""
		for _, test := range tests {
			pos := strings.LastIndex(value, test)
			if pos < 0 || lastPos > pos {
				continue
			}
			lastPos = pos
			last = test
		}

		var f int
		if slices.Contains(words, first) {
			f = slices.Index(words, first) + 1
		} else {
			i, err := strconv.Atoi(first)
			if err != nil {
				log.Fatalln("Couldn't parse string to int")
				return -1
			}
			f = i
		}

		var l int
		if slices.Contains(words, last) {
			l = slices.Index(words, last) + 1
		} else {
			i, err := strconv.Atoi(last)
			if err != nil {
				log.Fatalln("Couldn't parse string to int")
				return -1
			}
			l = i
		}

		total += f*10 + l
	}

	return total
}
