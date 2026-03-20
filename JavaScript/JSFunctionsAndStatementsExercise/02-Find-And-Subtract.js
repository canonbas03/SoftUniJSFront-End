function solve(num1, num2, num3) {
  const sumOfFirstTwo = sum(num1, num2);

  const difference = subtract(sumOfFirstTwo, num3);

  console.log(difference);

  function sum(a, b) {
    return a + b;
  }

  function subtract(a, b) {
    return a - b;
  }
}

solve(1, 2, 3);
