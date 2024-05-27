// const isMultOf3 = num => num % 3 === 0
// const isMultOf5 = num => num % 5 === 0
//
// function fizzBuzz (num) {
//     const isFizz = isMultOf3(num)
//     const isBuzz = isMultOf5(num)
//     if (isFizz && isBuzz) {
//         return "FizzBuzz"
//     } else if (isFizz) {
//         return "Fizz"
//     }
//     else if (isBuzz) {
//         return "Buzz"
//     } else {
//         return num
//     }
// }

function fizzBuzz (num) {
    const isFizz = num % 3 === 0
    const isBuzz = num % 5 === 0
    if (isFizz && isBuzz) {
        return "FizzBuzz"
    } else if (isFizz) {
        return "Fizz"
    }
    else if (isBuzz) {
        return "Buzz"
    } else {
        return num
    }
}

if (typeof module !== "undefined" && module.exports) {
    module.exports = fizzBuzz
}

// let i = 1
// while (i < 101) {
//     console.log(fizzBuzz(i))
//     i++
// }

for (let i = 1; i <= 100; i++) {
    console.log(fizzBuzz(i))
}