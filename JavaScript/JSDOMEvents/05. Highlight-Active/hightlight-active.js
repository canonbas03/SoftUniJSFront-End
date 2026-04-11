document.addEventListener("DOMContentLoaded", focused);

function focused() {
  const allInputEls = document.querySelectorAll('input[type="text"]');

  for (const inputEl of allInputEls) {
    inputEl.addEventListener("focus", addFocusedClass);
    inputEl.addEventListener("blur", removeFocusedClass);
  }

  function addFocusedClass(e) {
    e.target.parentElement.classList.add("focused");
  }

  function removeFocusedClass(e) {
    e.target.parentElement.classList.remove("focused");
  }
}
