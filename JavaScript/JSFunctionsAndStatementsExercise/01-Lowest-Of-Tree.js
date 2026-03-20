function solve(num1, num2, num3) {
  const lowestNumber = findLowest(num1, num2, num3);

  console.log(lowestNumber);

  function findLowest(...numbers) {
    const result = Math.min(...numbers);

    return result;
  }
}

solve(1, 23, -3);
