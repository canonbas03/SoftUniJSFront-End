function solve(start, end) {
  let totalSum = 0;
  let resultRow = "";
  for (let i = start; i <= end; i++) {
    totalSum += i;

    resultRow += i + " ";
  }

  console.log(resultRow.trimEnd());
  console.log(`Sum: ${totalSum}`);
}

solve(1, 5);
