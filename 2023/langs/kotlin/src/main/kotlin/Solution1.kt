fun solution1(): Int {
    val numbers = "1234567890"

    var total = 0

    calibrationData.forEach {
        var digits = ""
        for (i in 0..it.length) {
            val digit = it[i]
            if (!numbers.contains(digit)) continue

            digits += digit
            break
        }

        for (i in it.indices.reversed()) {
            val digit = it[i]
            if (!numbers.contains(digit)) continue

            digits += digit
            break
        }

        total += digits.toInt()
    }

    return total
}