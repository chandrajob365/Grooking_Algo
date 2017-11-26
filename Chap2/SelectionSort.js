const selectionSort = arr => {
  let smallestIndex = 0
  for (let i = 0; i < arr.length; i++) {
    smallestIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallestIndex]) {
        smallestIndex = j
      }
    }
    swap(arr, i, smallestIndex)
  }
  return arr
}

const swap = (arr, i, smallestIndex) => {
  let temp = arr[i]
  arr[i] = arr[smallestIndex]
  arr[smallestIndex] = temp
}

console.log(selectionSort([23, -1, 12, 43, 10]))
