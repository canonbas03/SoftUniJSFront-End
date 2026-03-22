function phoneBook(arr) {
  let contacts = {};

  for (const contactStr of arr) {
    let [name, phoneNumber] = contactStr.split(" ");
    contacts[name] = phoneNumber;
  }

  let entries = Object.entries(contacts);
  for (let [name, phoneNumber] of entries) {
    console.log(`${name} -> ${phoneNumber}`);
  }
}

phoneBook([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);
