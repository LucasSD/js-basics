interface NumberPair {
    x: number;
    y: number;
}

function twoNumbers(): NumberPair {
    let x = Math.floor(Math.random() * 100 + 1);
    let y = Math.floor(Math.random() * 50 + 1);
    return { x, y };
}

function makeOutputString(x: number, symbol: string, y: number, result: number): string {
    return `${x} ${symbol} ${y} = ${result}`;
}

function doOps(numberPair: NumberPair) {
    let a = numberPair.x, b = numberPair.y;
    let sum = a + b;
    let diff = a - b;
    let product = a * b;
    let quotient = a / b;
    let modulus = a % b;
    let outputSum = makeOutputString(a, "+", b, sum);
    let outputDiff = makeOutputString(a, "-", b, diff);
    let outputProduct = makeOutputString(a, "*", b, product);
    let outputQuotient = makeOutputString(a, "/", b, quotient);
    let outputModulus = makeOutputString(a, "%", b, modulus);
    return { outputSum, outputDiff, outputProduct, outputQuotient, outputModulus };
}

let output = doOps(twoNumbers());

console.log(output);

// The following is Node.js specific and not required for TypeScript in general,
// but kept for compatibility if using this in a Node.js context.
if (typeof module !== "undefined" && module.exports) {
    module.exports = { twoNumbers, makeOutputString, doOps };
}
