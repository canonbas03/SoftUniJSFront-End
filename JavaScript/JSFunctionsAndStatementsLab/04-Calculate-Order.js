// coffee - 1.50
// · water - 1.00
// · coke - 1.40
// · snacks - 2.00
function orderCalc(order, qty) {
  let totalPrice = 0;
  switch (order) {
    case "coffee":
      totalPrice = qty * 1.5;
      break;
    case "water":
      totalPrice = qty * 1;
      break;
    case "coke":
      totalPrice = qty * 1.4;
      break;
    case "snacks":
      totalPrice = qty * 2;
  }
  console.log(totalPrice.toFixed(2));
}

orderCalc("coke", 5);
