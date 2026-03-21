function solve(number) {
  const divisors = findDivisors(number);

  const divisorsSum = sumNumbers(divisors);

  console.log(perfectResultStatus(number, divisorsSum));

  function findDivisors(number) {
    let divisors = [];
    for (let i = 1; i <= number / 2; i++) {
      if (number % i === 0) {
        divisors.push(i);
      }
    }

    return divisors;
  }

  function sumNumbers(arr = []) {
    const sum = arr.reduce((acc, number) => acc + number, 0);

    return sum;
  }

  function perfectResultStatus(number, divisorSum) {
    if (number === divisorSum) {
      return "We have a perfect number!";
    }

    return "It's not so perfect.";
  }
}

solve(7);
