// function reverseString(txt) {
//     let rpointer = txt.length -1
//     let newString = ""
//     while (rpointer > -1) {
//         newString += txt[rpointer]
//         rpointer --
//     }
//     return newString
// }


// function reverseString(txt) {
//     let newString = ""
//     for (let char of txt) {
//         newString = char + newString
//     }
//     return newString
// }

function reverseString(txt) {
    arr = txt.split("")
    return arr.reduce((newString, char) => char + newString, "")
}

reverseString("hello")
module.exports = reverseString