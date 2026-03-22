function convertToObj(jsonStr) {
  let personObj = JSON.parse(jsonStr);
  let entries = Object.entries(personObj);

  for (const [key, val] of entries) {
    console.log(`${key}: ${val}`);
  }
}

convertToObj('{"name": "George", "age": 40, "town": "Sofia"}');
