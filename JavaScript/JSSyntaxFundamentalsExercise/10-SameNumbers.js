function solve(number) {
  let input = number.toString();
  const firstDigit = input[0];

  let areEqual = true;
  let sum = Number(firstDigit);

  for (let i = 1; i < input.length; i++) {
    if (firstDigit != input[i]) {
      areEqual = false;
    }
    sum += Number(input[i]);
  }

  console.log(areEqual);
  console.log(sum);
}

solve(222223);
