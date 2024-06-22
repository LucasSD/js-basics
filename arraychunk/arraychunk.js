// const chunk = (arr, size) => {
//   let chunked = []
//   const len = arr.length
//   for (let i = 1; i <= Math.ceil(len / size); i++ ) {
//     chunked.push(arr.splice(0, size))
//   }
//   return chunked
// }

const chunk = (arr, size) => {
  let chunked = []
  while (arr.length) {
    chunked.push(arr.splice(0, size))
  }
  return chunked
}


chunk([1, 2, 3, 4], 3)
module.exports = chunk