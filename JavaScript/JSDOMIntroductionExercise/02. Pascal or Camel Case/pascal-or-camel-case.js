function solve() {
  const textEl = document.getElementById("text");
  const conventionEl = document.getElementById("naming-convention");
  const resultSpanEl = document.getElementById("result");

  const text = textEl.value;
  const convention = conventionEl.value;

  switch (convention) {
    case "Camel Case":
      resultSpanEl.textContent = toCamelCase(text);
      break;
    case "Pascal Case":
      resultSpanEl.textContent = toPascalCase(text);
      break;
    default:
      resultSpanEl.textContent = "Error!";
  }

  function toPascalCase(text) {
    const result = text
      .toLowerCase()
      .split(" ")
      .map((word) => `${word[0].toUpperCase()}${word.substring(1)}`)
      .join("");

    return result;
  }

  function toCamelCase(text) {
    const result = text
      .toLowerCase()
      .split(" ")
      .map((word, index) =>
        index === 0 ? word : `${word[0].toUpperCase()}${word.substring(1)}`,
      );

    return result.join("");
  }
}
