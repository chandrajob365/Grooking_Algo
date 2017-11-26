const factorial = (x, acc) => {
  return (x === 0 || x === 1)
    ? acc
    : factorial((x - 1), (x * acc))
}

console.log(factorial(4, 1))
