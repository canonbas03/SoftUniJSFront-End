function priceCalc(day, age) {
  let price;
  switch (day) {
    case "Weekday":
      if (0 <= age && age <= 18) {
        price = 12;
      } else if (18 < age && age <= 64) {
        price = 18;
      } else if (64 < age && age <= 122) {
        price = 12;
      }
      break;
    case "Weekend":
      if (0 <= age && age <= 18) {
        price = 15;
      } else if (18 < age && age <= 64) {
        price = 20;
      } else if (64 < age && age <= 122) {
        price = 15;
      }
      break;
    case "Holiday":
      if (0 <= age && age <= 18) {
        price = 5;
      } else if (18 < age && age <= 64) {
        price = 12;
      } else if (64 < age && age <= 122) {
        price = 10;
      }
      break;
    default:
      price = -1;
      break;
  }

  if (price == undefined || price == -1) {
    return console.log("Error!");
  }

  return console.log(`${price}$`);
}

priceCalc("Weekend", 1288);
