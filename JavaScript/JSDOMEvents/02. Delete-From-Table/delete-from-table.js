function deleteByEmail() {
  const emailEls = document.querySelectorAll("tr td:nth-child(2)");
  const emailInputEL = document.querySelector('input[name="email"]');
  const resultEl = document.querySelector("#result");

  const emailTextVal = emailInputEL.value.trim();

  let isFound = false;
  for (const email of emailEls) {
    if (email.textContent === emailTextVal) {
      email.parentElement.remove();
      resultEl.textContent = "Deleted.";
      isFound = true;
    }
  }

  if (!isFound) {
    resultEl.textContent = "Not found.";
  }
}
