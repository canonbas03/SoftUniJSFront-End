function solve(text = "") {
  let pattern = /#(?<specialWord>[A-Za-z]+)/g;

  const matches = text.matchAll(pattern);

  for (const match of matches) {
    console.log(match.groups.specialWord);
  }
}

solve(
  "The symbol # is known #variously in English-speaking #regions as the #number sign",
);
