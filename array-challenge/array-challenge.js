function modifyArray(arr) {
    arr.unshift(0)
    arr.push(6)
    arr.reverse()
    return arr
}

function combineArrays(arr1, arr2) {
    return arr1.concat(arr2.slice(1))
}


console.log(modifyArray([1, 2, 3, 4, 5]))
console.log(combineArrays([1, 2, 3, 4, 5], [5, 6, 7, 8, 9, 10]))

if (typeof module !== "undefined" && module.exports) {
    module.exports = { modifyArray, combineArrays };
}

