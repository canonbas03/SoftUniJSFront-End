function solve(num1, num2) {
  const firstFactorial = findFactorial(num1);
  const secondFactorial = findFactorial(num2);

  const result = firstFactorial / secondFactorial;

  console.log(result.toFixed(2));

  function findFactorial(number) {
    if (number <= 1) {
      return 1;
    }
    return number * findFactorial(number - 1);
  }
}

solve(5, 2);
