package main

import (
	"fmt"
	"log"
	"os"
	"path"
	"strings"
)

func main() {
	cwd, err := os.Getwd()
	if err != nil {
		log.Fatalln("Can't read current directory")
		return
	}
	filePath := path.Join(cwd, "..", "..", "..", "inputs", "1.txt")
	content, err := os.ReadFile(filePath)
	if err != nil {
		log.Fatalln("Can't read input file")
		return
	}
	calibrationData := strings.Split(string(content), "\n")

	fmt.Println("Solution1:", solution1(calibrationData))
	fmt.Println("Solution2:", solution2(calibrationData))
}
