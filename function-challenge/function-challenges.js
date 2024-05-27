// (function (length, width) {
//
//     console.log(`The area of a rectangle with a length of ${length} and a width of ${width} is ${length * width}.`);
//
// })(10, 3);

((length, width) => {

    console.log(`The area of a rectangle with a length of ${length} and a width of ${width} is ${length * width}.`);

})(9, 5);


// function getCelsius(ftemp) {
//     const ctemp = ((ftemp - 32) * 5 / 9).toFixed(2)
//     return `The temperature is ${parseFloat(ctemp)} \xB0C`
// }
//


const getCelsius = ftemp => `The temperature is ${parseFloat(((ftemp - 32) * 5 / 9).toFixed(2))} \xB0C`

// function minMax(arr) {
//     const min = Math.min(...arr)
//     const max = Math.max(...arr)
//     return {min, max}
// }

const minMax = arr => ({min: Math.min(...arr), max: Math.max(...arr) })

if (typeof module !== "undefined" && module.exports) {
    module.exports = {getCelsius, minMax};
}