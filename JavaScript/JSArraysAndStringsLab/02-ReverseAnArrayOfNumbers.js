function solve(n, arr) {
  let newArray = arr.slice(0, n).reverse().join(" ");

  console.log(newArray);
}
solve(3, [10, 20, 30, 40, 50]);
