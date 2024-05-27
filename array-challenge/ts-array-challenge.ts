function modifyArray(arr: number[]): number[] {
    arr.unshift(0);
    arr.push(6);
    arr.reverse();
    return arr;
}

function combineArrays(arr1: number[], arr2: number[]): number[] {
    return arr1.concat(arr2.slice(1));
}

console.log(modifyArray([1, 2, 3, 4, 5]));
console.log(combineArrays([1, 2, 3, 4, 5], [5, 6, 7, 8, 9, 10]));

// TypeScript doesn't typically use module.exports, but if you're using it in a Node.js context with TypeScript:
if (typeof module !== "undefined" && module.exports) {
    module.exports = { modifyArray, combineArrays };
}
