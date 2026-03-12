function solve(currentSpeed, area) {
  speedLimit = speedLimitByArea(area);

  if (speedLimit >= currentSpeed) {
    console.log(`Driving ${currentSpeed} km/h in a ${speedLimit} zone`);
  } else {
    let excessSpeed = currentSpeed - speedLimit;
    let speedingStatusResult = speedingStatus(excessSpeed);
    console.log(
      `The speed is ${currentSpeed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${speedingStatusResult}`,
    );
  }

  function speedLimitByArea(area) {
    switch (area) {
      case "motorway":
        return 130;
      case "interstate":
        return 90;
      case "city":
        return 50;
      case "residential":
        return 20;
    }
  }

  function speedingStatus(excessSpeed) {
    if (excessSpeed <= 20) return "speeding";
    else if (excessSpeed <= 40) return "excessive speeding";
    else return "reckless driving";
  }
}

solve(21, "residential");
