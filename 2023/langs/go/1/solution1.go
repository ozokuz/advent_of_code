package main

import (
	"log"
	"slices"
	"strconv"
	"strings"
)

func solution1(calibrationData []string) int {
	numbers := strings.Split("1234567890", "")

	total := 0

	for _, value := range calibrationData {
		digits := ""
		for i := 0; i < len(value); i++ {
			digit := string(value[i])
			if !slices.Contains(numbers, digit) {
				continue
			}

			digits += digit
			break
		}

		for i := len(value) - 1; i >= 0; i-- {
			digit := string(value[i])
			if !slices.Contains(numbers, digit) {
				continue
			}

			digits += digit
			break
		}

		i, err := strconv.Atoi(digits)
		if err != nil {
			log.Fatalln("Couldn't parse digits to integer")
		}

		total += i
	}

	return total
}
