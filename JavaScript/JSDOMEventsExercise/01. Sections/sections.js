document.addEventListener("DOMContentLoaded", solve);

function solve() {
  const titleInputEl = document.querySelector('#task-input input[type="text"]');
  const submitBtn = document.querySelector('#task-input input[type="submit"]');

  submitBtn.addEventListener("click", generateBtnClickHandler);

  function generateBtnClickHandler(e) {
    e.preventDefault();

    const titles = titleInputEl.value.split(", ");
    const titleSections = titles.map(createTitleSection);

    const contentEl = document.getElementById("content");
    contentEl.append(...titleSections);
    contentEl.addEventListener("click", handleSectionVisibility);

    function createTitleSection(title) {
      const titleEl = document.createElement("p");
      titleEl.textContent = title;
      titleEl.style.display = "none";

      const sectionEl = document.createElement("div");
      sectionEl.appendChild(titleEl);

      return sectionEl;
    }

    function handleSectionVisibility(e) {
      const currentSection = e.target;

      if (!currentSection.tagName === "div") {
        return;
      }

      const currentTitleEl = currentSection.querySelector("p");
      currentTitleEl.style.display = "block";
    }
  }
}
