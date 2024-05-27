function createArray () {
    const base_status = {
        own: true,
            reading: false,
            read: false,
    }
    return [
        {title: "Title A",
        author: "Lucas SD",
        status: base_status},
        {title: "Title B",
            author: "Hamia SD",
            status: base_status},
        {title: "Title C",
            author: "Marilyn SD",
            status: base_status}
    ]
}

function updateArray(arr) {

    const newArr = arr.map(item => ({
        ...item, // Spread to copy top-level properties
        status: { ...item.status } // Deep copy the 'status' object to avoid mutating the original
    }));
    newArr[0].status.read = true
    newArr[1].status.read = true
    newArr[2].status.read = true
    return newArr
}

function stringifiedArray(arr) {
    return JSON.stringify(arr)
}

library = createArray()
updated = updateArray(library)
// str_arr =

const firstBook = updated[0]
const { title: newTitle} = firstBook
strArr = stringifiedArray(library)
console.log(library, updated, newTitle, strArr)

if (typeof module !== "undefined" && module.exports) {
    module.exports = { createArray, updateArray, stringifiedArray };
}