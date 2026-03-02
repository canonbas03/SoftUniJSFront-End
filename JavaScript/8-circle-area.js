function circleArea(argument) {
  let result;
  if (typeof argument == "number") {
    result = argument ** 2 * Math.PI;
    result = result.toFixed(2);
  } else {
    result = `We can not calculate the circle area, because we receive a ${typeof argument}.`;
  }

  return console.log(result);
}

circleArea(8);
