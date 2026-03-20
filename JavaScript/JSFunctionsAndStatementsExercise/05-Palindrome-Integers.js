function solve(numbers) {
  // Check each element
  for (const number of numbers) {
    console.log(palindromeStatus(number.toString()).toString());
  }

  // Print the result

  function palindromeStatus(word) {
    const wordReversed = word.toString().split("").reverse().join("");

    return word === wordReversed;
  }
}

solve([123, 323, 421, 121]);
