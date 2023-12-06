import kotlin.io.path.Path
import kotlin.io.path.readLines

val cwd: String = System.getProperty("user.dir")
val filePath = Path(cwd, "..", "..", "inputs", "1.txt")
val calibrationData = filePath.readLines()

fun main() {
    println("Solution1: ${solution1()}")
    println("Solution2: ${solution2()}")
}