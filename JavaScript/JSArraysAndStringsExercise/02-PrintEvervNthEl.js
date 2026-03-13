function solve(arr, n) {
  let result = [];
  result = arr.filter((_, index) => index % n === 0);

  return result;
}

console.log(solve(["5", "20", "31", "4", "20"], 2));
