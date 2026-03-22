function manageAddresses(arr) {
  let peopleAddresses = {};

  for (let addressStr of arr) {
    let [name, address] = addressStr.split(":");

    peopleAddresses[name] = address;
  }

  let entries = Object.entries(peopleAddresses).sort((a, b) =>
    a[0].localeCompare(b[0]),
  );

  for (let [name, address] of entries) {
    console.log(`${name} -> ${address}`);
  }
}

manageAddresses([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
