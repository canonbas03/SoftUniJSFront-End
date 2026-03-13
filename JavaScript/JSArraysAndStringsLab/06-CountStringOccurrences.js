function solve(text, searchWord) {
  let resultArr = text.split(" ").filter((word) => word === searchWord);

  console.log(resultArr.length);
}
solve("This is a word and it also is a sentence", "is");
