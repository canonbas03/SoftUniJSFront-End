function solve(text) {
  let currentWord = text[0];
  let words = [];

  for (let i = 1; i < text.length; i++) {
    let currentChar = text[i];

    if (currentChar !== currentChar.toUpperCase()) {
      currentWord += currentChar;
      continue;
    }

    words.push(currentWord);
    currentWord = currentChar;
  }
  words.push(currentWord);

  console.log(words.join(", "));
}

solve("SplitMeIfYouCanHaHaYouCantOrYouCan");
