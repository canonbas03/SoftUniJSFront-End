function solve(text, word) {
  let censoredWord = "*".repeat(word.length);

  text = text.replaceAll(word, censoredWord);

  console.log(text);
}

solve("A small sentence with some small words", "small");
