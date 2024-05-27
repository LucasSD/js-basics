function calculator (num1, num2, operator) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || isNaN(num1) || isNaN(num2)) {
        return NaN;
    }
    switch (operator) {
        case "+":
            return num1 + num2
        case "-":
            return num1 - num2
        case "*":
            return num1 * num2
        case "/":
            return num1 / num2
        default:
            return "Unknown operator"
    }

}
console.log(calculator(3, 2, ""))

if (typeof module !== "undefined" && module.exports) {
    module.exports = calculator;
}