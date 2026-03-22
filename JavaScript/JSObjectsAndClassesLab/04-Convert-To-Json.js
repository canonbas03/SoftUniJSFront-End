function convertToJson(fName, lName, hairColor) {
  let personObj = {
    name: fName,
    lastName: lName,
    hairColor,
  };

  let personJson = JSON.stringify(personObj);
  console.log(personJson);
}

convertToJson("George", "Jones", "Brown");
