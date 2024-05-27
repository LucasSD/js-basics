// function capitalize(str) {
//     let newString = str[0].toUpperCase() + str.slice(1)
//     return newString
// }

function capitalize(str) {
    if (typeof str !== 'string' || str.length === 0) {
        return ''; // Return an empty string or some default value if input is invalid
    }
    return `${str[0].toUpperCase()}${str.slice(1)}`
}

if (typeof module !== "undefined" && module.exports) {
module.exports = capitalize; }
