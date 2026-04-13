document.addEventListener("DOMContentLoaded", solve);

function solve() {
  const allShowBtns = document.querySelectorAll("button");

  for (const showBtn of allShowBtns) {
    showBtn.addEventListener("click", handleShowBtnClick);
  }

  function handleShowBtnClick(e) {
    const currentShowBtn = e.currentTarget;
    const currentProfile = currentShowBtn.parentElement;
    const hiddenFields = currentProfile.querySelector(".hidden-fields");
    const radioGroup = currentProfile.querySelector(".radio-group");
    const lockRadioBtn = radioGroup.querySelector('input[type="radio"]');

    let isLocked = lockRadioBtn.checked;

    if (isLocked) {
      return;
    }

    if (currentShowBtn.textContent === "Show more") {
      hiddenFields.classList.remove("active");
      currentShowBtn.textContent = "Show less";
    } else {
      hiddenFields.classList.add("active");
      currentShowBtn.textContent = "Show more";
    }
  }
}
