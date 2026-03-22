function createPersonObj(firstName, lastName, age) {
  let personObj = {
    firstName,
    lastName,
    age,
  };

  return personObj;
}

console.log(createPersonObj("A", "B", 22));
