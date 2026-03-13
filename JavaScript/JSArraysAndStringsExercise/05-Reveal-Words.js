function solve(wordInput, text) {
  let words = wordInput.split(", ");
  words.sort((a, b) => b.length - a.length);

  for (const word of words) {
    let wordToReplace = "*".repeat(word.length);
    text = text.replaceAll(wordToReplace, word);
  }

  console.log(text);
}

solve(
  "great, learning",
  "softuni is ***** place for ******** new programming languages",
);
