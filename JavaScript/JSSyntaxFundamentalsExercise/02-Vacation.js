function solve(groupSize, groupType, weekDay) {
  let singlePrice = getSinglePrice(groupType, weekDay);
  let totalPrice = singlePrice * groupSize;

  function getSinglePrice(groupType, weekDay) {
    switch (groupType) {
      case "Students":
        if (weekDay == "Friday") {
          return 8.45;
        } else if (weekDay == "Saturday") {
          return 9.8;
        } else if (weekDay == "Sunday") {
          return 10.46;
        }

      case "Business":
        if (weekDay == "Friday") {
          return 10.9;
        } else if (weekDay == "Saturday") {
          return 15.6;
        } else if (weekDay == "Sunday") {
          return 16;
        }

      case "Regular":
        if (weekDay == "Friday") {
          return 15;
        } else if (weekDay == "Saturday") {
          return 20;
        } else if (weekDay == "Sunday") {
          return 22.5;
        }
    }
  }

  if (groupType == "Students" && groupSize >= 30) {
    totalPrice *= 0.85;
  } else if (groupType == "Business" && groupSize >= 100) {
    totalPrice -= singlePrice * 10;
  } else if (groupType == "Regular" && groupSize >= 10 && groupSize <= 20) {
    totalPrice *= 0.95;
  }

  console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

solve(30, "Students", "Sunday");
