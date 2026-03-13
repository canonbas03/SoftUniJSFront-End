function solve(arr, step) {
  for (let index = 0; index < step; index++) {
    let firstNum = arr.shift();
    arr.push(firstNum);
  }

  console.log(arr.join(" "));
}

solve([51, 47, 32, 61, 21], 2);
