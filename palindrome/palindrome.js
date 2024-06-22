// function palindrome(str) {
//     let lpointer = 0
//     let rpointer =  str.length -1
//     while (lpointer != rpointer) {
//         if (str[lpointer] != str[rpointer]) {
//             return false
//         }
//
//         lpointer ++
//         rpointer --
//     }
//     return true
// }

// function palindrome(str) {
//     return str.split('').every((char, index) => {
//         return char === str[str.length - index - 1];
//     });
// }

function palindrome(str) {
    const reversed = str.split("").reverse().join("")
    return reversed === str
}

palindrome("kayak")

module.exports = palindrome