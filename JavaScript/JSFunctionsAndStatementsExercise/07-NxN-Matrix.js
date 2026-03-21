function solve(number) {
  const matrixRow = getMatrixRow(number);

  const matrix = createMatrix(matrixRow);

  printMatrix(matrix);

  function getMatrixRow(number) {
    let row = [];

    for (let i = 0; i < number; i++) {
      row.push(number);
    }

    return row;
  }

  function createMatrix(matrixRow) {
    let matrix = [];

    for (let i = 0; i < matrixRow.length; i++) {
      matrix.push(matrixRow);
    }
    return matrix;
  }

  function printMatrix(matrix) {
    for (const row of matrix) {
      const rowProcessed = row.join(" ");
      console.log(rowProcessed);
    }
  }
}

solve(9);
