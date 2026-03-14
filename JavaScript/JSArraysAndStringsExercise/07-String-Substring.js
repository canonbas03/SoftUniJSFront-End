function solve(searchWord, text = "") {
  const regex = new RegExp(`\\b${searchWord}\\b`, "i");

  if (regex.test(text)) {
    return console.log(searchWord);
  }

  console.log(`${searchWord} not found!`);
}

solve("javascript", "JavaScript1 is the best programming language");
