function solve(fruitType, weightInGrams, pricePerKg) {
  const weightInKg = weightInGrams / 1000;

  const neededMoney = pricePerKg * weightInKg;

  console.log(
    `I need $${neededMoney.toFixed(2)} to buy ${weightInKg.toFixed(2)} ${fruitType}.`,
  );
}

solve("apple", 1563, 2.35);
