fun solution2(): Int {
    val numbers = "1234567890".toCharArray().map { it.toString() }.toTypedArray()
    val words = arrayOf("one", "two", "three", "four", "five", "six", "seven", "eight", "nine")
    val tests = arrayOf(*numbers, *words)

    var total = 0

    for (value in calibrationData) {
        var firstPos = value.length + 20
        var first = ""
        for (test in tests) {
            val pos = value.indexOf(test)
            if (pos < 0) continue
            if (firstPos < pos) continue
            firstPos = pos
            first = test
        }

        var lastPos = -1
        var last = ""
        for (test in tests) {
            val pos = value.lastIndexOf(test)
            if (pos < 0) continue
            if (lastPos > pos) continue
            lastPos = pos
            last = test
        }

        val f = if (words.contains(first)) words.indexOf(first) + 1 else first.toInt()
        val l = if (words.contains(last)) words.indexOf(last) + 1 else last.toInt()

        total += f * 10 + l
    }

    return total
}