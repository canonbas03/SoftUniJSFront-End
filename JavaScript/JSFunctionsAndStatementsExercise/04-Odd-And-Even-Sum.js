function solve(number) {
  // Convert a number to an array of numbers
  const numbers = makeArray(number);

  // Find all odd numbers and sum them
  const oddSum = sumOddNumbers(numbers);

  // Find all even numbers and sum them
  const evenSum = sumEvenNumbers(numbers);

  // Print the result
  print(oddSum, evenSum);

  function sumOddNumbers(numbers) {
    let totalSum = 0;
    for (const number of numbers) {
      if (number % 2 !== 0) {
        totalSum += number;
      }
    }

    return totalSum;
  }

  function sumEvenNumbers(numbers) {
    let totalSum = 0;
    for (const number of numbers) {
      if (number % 2 === 0) {
        totalSum += number;
      }
    }

    return totalSum;
  }

  function makeArray(number) {
    const numbers = number.toString().split("").map(Number);

    return numbers;
  }

  function print(oddNumberSum, evenNumberSum) {
    console.log(`Odd sum = ${oddNumberSum}, Even sum = ${evenNumberSum}`);
  }
}

solve(1000435);
