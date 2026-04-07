function extractText() {
  let liEls = document.querySelectorAll("li");
  let textareaEl = document.querySelector("#result");

  for (const li of liEls) {
    let text = li.textContent;

    textareaEl.textContent += text + "\n";
  }
}
