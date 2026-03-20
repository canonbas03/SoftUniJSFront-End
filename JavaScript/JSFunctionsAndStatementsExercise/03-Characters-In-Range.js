function solve(...characters) {
  const sortedCharacters = [...characters].sort();

  const minCharacter = sortedCharacters[0];
  const maxCharacter = sortedCharacters.at(-1);

  const range = getCharacterRange(minCharacter, maxCharacter);

  console.log(range.join(" "));

  function getCharacterRange(startChar, endChar) {
    let range = [];

    const startCharASCII = startChar.charCodeAt(0);
    const endCharASCII = endChar.charCodeAt(0);

    for (let i = startCharASCII + 1; i < endCharASCII; i++) {
      let character = String.fromCharCode(i);
      range.push(character);
    }

    return range;
  }
}

solve("a", "m");
