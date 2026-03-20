function solve(password) {
  let isValid = true;

  if (!isCorrectLength(password)) {
    isValid = false;
    console.log("Password must be between 6 and 10 characters");
  }

  if (!isLetersAndDigits(password)) {
    isValid = false;
    console.log("Password must consist only of letters and digits");
  }

  if (!has2Digits(password)) {
    isValid = false;
    console.log("Password must have at least 2 digits");
  }

  if (isValid) {
    console.log("Password is valid");
  }

  function isCorrectLength(password) {
    if (password.length < 6 || password.length > 10) {
      return false;
    }
    return true;
  }

  function isLetersAndDigits(password) {
    const pattern = /^[a-zA-Z0-9]+$/;

    return pattern.test(password);
  }

  function has2Digits(password) {
    const digits = password.split("").filter((letter) => Number(letter) >= 0);

    return digits.length > 1;
  }
}

solve("123bbb");
