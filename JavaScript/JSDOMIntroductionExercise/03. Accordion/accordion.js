function toggle() {
  const extraTextEl = document.getElementById("extra");
  const extraButtonEl = document.querySelector("#accordion .button");

  let isToggled = extraTextEl.style.display === "block";

  if (isToggled) {
    extraTextEl.style.display = "none";
    extraButtonEl.textContent = "More";
  } else {
    extraTextEl.style.display = "block";
    extraButtonEl.textContent = "Less";
  }
}
