function twoNumbers() {
    let x = Math.floor(Math.random() * 100 + 1)
    let y = Math.floor(Math.random() * 50 + 1)
    return { x, y }
}

function makeOutputString(x, symbol, y, result) {
    return `${x} ${symbol} ${y} = ${result}`
}

function doOps(numberPair) {
    let a = numberPair.x, b = numberPair.y
    let sum = a + b
    let diff = a - b
    let product = a * b
    let quotient = a / b
    let modulus = a % b
    let outputSum = makeOutputString(a, "+", b, sum)
    let outputdiff = makeOutputString(a, "-", b, diff)
    let outputproduct = makeOutputString(a, "*", b, product)
    let outputquotient = makeOutputString(a, "/", b, quotient)
    let outputmodulus = makeOutputString(a, "%", b, modulus)
    return { outputSum, outputdiff, outputproduct, outputquotient, outputmodulus }
}

let output  = doOps(twoNumbers())

console.log(output)

if (typeof module !== "undefined" && module.exports) {
    module.exports = { twoNumbers, makeOutputString, doOps };
}

