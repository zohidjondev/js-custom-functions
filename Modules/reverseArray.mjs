// This implementation was done without looking to
// how reverese works using only the logic that i knew

// export function reverseArray(array) {
//   for (let i = 0; i < array.length; i++) {
//     let element = array.pop()
//     array.splice(i, 0, element)
//   }
// }

export function reverseArray(array) {
  let reversedArray = []
  for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i])
  }
  return reversedArray
}