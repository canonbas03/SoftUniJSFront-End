function calculate(num1, num2, operation) {
  let add = (a, b) => a + b;
  let subtract = (a, b) => a - b;
  let multiply = (a, b) => a * b;
  let divide = (a, b) => a / b;

  let result = 0;
  switch (operation) {
    case "add":
      result = add(num1, num2);
      break;
    case "subtract":
      result = subtract(num1, num2);
      break;
    case "multipy":
      result = multiply(num1, num2);
      break;
    case "divide":
      result = divide(num1, num2);
  }

  console.log(result);
}

calculate(5, 2, "add");
