function solve(number, ...operations) {
  let result = number;
  for (const operation of operations) {
    result = operationsByName(operation, result);
    console.log(result);
  }

  function operationsByName(name, number) {
    switch (name) {
      case "chop":
        return number / 2;
      case "dice":
        return Math.sqrt(number);
      case "spice":
        return ++number;
      case "bake":
        return (number *= 3);
      case "fillet":
        return (number *= 0.8).toFixed(1);
    }
  }
}

solve("9", "dice", "spice", "chop", "bake", "fillet");
