function solve(number) {
  let input = number;
  let totalSum = 0;

  while (input != 0) {
    let lastDigit = input % 10;
    totalSum += lastDigit;

    input = Math.trunc(input / 10);
  }

  console.log(totalSum);
}

solve(245678);
