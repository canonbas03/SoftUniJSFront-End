document.addEventListener("DOMContentLoaded", solve);

function solve() {
  const emailInputEl = document.getElementById("email");

  emailInputEl.addEventListener("change", handleEmailChange);

  function handleEmailChange() {
    const emailText = emailInputEl.value;
    const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;

    if (!pattern.test(emailText)) {
      emailInputEl.classList.add("error");
    } else {
      emailInputEl.classList.remove("error");
    }
  }
}
