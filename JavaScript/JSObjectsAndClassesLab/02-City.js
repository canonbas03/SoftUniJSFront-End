function printCity(obj) {
  let entries = Object.entries(obj);

  for (const [key, value] of entries) {
    console.log(`${key} -> ${value}`);
  }
}

let city = {
  name: "Sofia",
  area: 492,
  population: 1238438,
  country: "Bulgaria",
  postCode: "1000",
};
printCity(city);
