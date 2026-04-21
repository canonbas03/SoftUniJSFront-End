window.addEventListener("load", solve);

function solve() {
  const createBtn = document.getElementById("create-btn");

  createBtn.addEventListener("click", handleCreateBtnAction);

  function handleCreateBtnAction(e) {
    const preparingListEl = document.getElementById("preparing-list");

    const nameInputEl = document.getElementById("name");
    const locationEl = document.getElementById("location");
    const genderEl = document.getElementById("gender");

    const name = nameInputEl.value;
    const location = locationEl.value;
    const gender = genderEl.value;

    nameInputEl.value = "";
    locationEl.value = "";
    genderEl.value = "";

    if (!name || !location || !gender) {
      return;
    }

    const liEl = document.createElement("li");
    liEl.classList.add("creating");

    const articleEl = document.createElement("article");

    const h4NameEl = document.createElement("h4");
    h4NameEl.textContent = name;

    const locationPEl = document.createElement("p");
    locationPEl.textContent = location;

    const genderPEl = document.createElement("p");
    genderPEl.textContent = gender;

    const editBtn = document.createElement("button");
    editBtn.classList.add("action-btn", "edit");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", () => {
      nameInputEl.value = name;
      locationEl.value = location;
      genderEl.value = gender;

      preparingListEl.innerHTML = "";

      createBtn.removeAttribute("disabled");
    });

    const doneBtn = document.createElement("button");
    doneBtn.classList.add("action-btn", "done");
    doneBtn.textContent = "Done";
    doneBtn.addEventListener("click", () => {
      const newCharactersEl = document.getElementById("character-list");

      newCharactersEl.appendChild(liEl);
      liEl.removeChild(editBtn);
      liEl.removeChild(doneBtn);

      createBtn.removeAttribute("disabled");
    });

    articleEl.appendChild(h4NameEl);
    articleEl.appendChild(locationPEl);
    articleEl.appendChild(genderPEl);

    liEl.appendChild(articleEl);
    liEl.appendChild(editBtn);
    liEl.appendChild(doneBtn);

    preparingListEl.appendChild(liEl);

    createBtn.setAttribute("disabled", "");
  }
}
