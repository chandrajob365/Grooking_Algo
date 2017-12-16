const addAll = (arr, sum) => {
  return arr.length ? addAll(arr.slice(1), (sum + arr[0])) : sum
}

console.log(addAll([23, 34, 52], 0))

const countElm = (arr, count) => {
  return arr.length ? countElm(arr.slice(1), ++count) : count
}

console.log(countElm([23, 34], 0))

const maxVal = (arr, max) => {
  return arr.length ? maxVal(arr.slice(1), (getMax(arr[0], max))) : max
}

const getMax = (current, max) => {
  return current > max ? current : max
}

let arr = [23, 12, 34, 11, 43, 10]
console.log(maxVal(arr, arr[0]))

const bSearch = (arr, start, end, k) => {
  if (start <= end) {
    let mid = Math.floor((start + end) / 2)
    if (arr[mid] > k) return bSearch(arr, start, mid - 1, k)
    if (arr[mid] < k) return bSearch(arr, mid + 1, arr.length - 1, k)
    else return k + ' found @ ' + 'index ' + mid
  }
  return k + ' Not found'
}

let sortedArr = [12, 23, 34, 45, 56, 67]
console.log(bSearch([], 0, [].length - 1, 23))
console.log(bSearch(sortedArr, 0, sortedArr.length - 1, 23))
