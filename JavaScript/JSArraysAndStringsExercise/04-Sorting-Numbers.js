function solve(numbers) {
  numbers.sort((a, b) => a - b);

  let resultArr = [];

  while (numbers.length > 0) {
    let smallest = numbers.shift();
    let biggest = numbers.pop();

    if (smallest != undefined) {
      resultArr.push(smallest);
    }
    if (biggest != undefined) {
      resultArr.push(biggest);
    }
  }

  return resultArr;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
