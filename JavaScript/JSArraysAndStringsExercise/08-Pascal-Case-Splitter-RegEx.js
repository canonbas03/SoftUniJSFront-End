function solve(text) {
  const regex = /[A-Z][a-z]*/g;

  const matches = text.matchAll(regex);

  const result = Array.from(matches)
    .map((match) => match[0])
    .join(", ");

  console.log(result);
}

solve("SplitMeIfYouCanHaHaYouCantOrYouCan");
