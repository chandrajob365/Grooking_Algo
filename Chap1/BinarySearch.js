const binarySearch = (arr, k) => {
  let low = 0
  let high = arr.length - 1
  while (low <= high) {
    let mid = Math.floor((low + high) / 2)
    console.log('mid = ', mid)
    if (arr[mid] === k) return mid
    if (arr[mid] < k) low = mid + 1
    else high = mid - 1
  }
  return -1
}

console.log(binarySearch([-1, 23, 43], -1))

const bSearchRecursive = (arr, k, low, high) => {
  if (low > high) return -1
  if (low <= high) {
    let mid = Math.floor((low + high) / 2)
    if (arr[mid] === k) return mid
    if (arr[mid] < k) return bSearchRecursive(arr, k, mid + 1, high)
    else return bSearchRecursive(arr, k, low, mid - 1)
  }
}

console.log(bSearchRecursive([-2, 23, 56, 67], -2, 0, 3))
