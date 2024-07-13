export function reverseArray(array) {
  for (let i = 0; i < array.length; i++) {
    let element = array.pop()
    array.splice(i, 0, element)
  }
}