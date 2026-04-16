window.addEventListener("load", solve);

function solve() {
  const addBtnEl = document.getElementById("add-btn");
  const nameInputEl = document.getElementById("name");
  const numberInputEl = document.getElementById("phone");
  const categoryEl = document.getElementById("category");
  const checkListItem = document.getElementById("check-list");
  const contactListItem = document.getElementById("contact-list");

  console.log(nameInputEl);
  console.log(numberInputEl);
  console.log(categoryEl);

  addBtnEl.addEventListener("click", handleAddButtonAction);

  function handleAddButtonAction() {
    const name = nameInputEl.value;
    const number = numberInputEl.value;
    const category = categoryEl.value;
    if (!name || !number || !category) {
      return;
    }

    const liEl = document.createElement("li");
    const articleEl = document.createElement("article");

    const namePEl = document.createElement("p");
    namePEl.textContent = `name:${name}`;
    articleEl.appendChild(namePEl);

    const numberPEl = document.createElement("p");
    numberPEl.textContent = `number:${number}`;
    articleEl.appendChild(numberPEl);

    const categoryPEl = document.createElement("p");
    categoryPEl.textContent = `category:${category}`;
    articleEl.appendChild(categoryPEl);

    liEl.appendChild(articleEl);

    checkListItem.appendChild(liEl);

    nameInputEl.value = "";
    numberInputEl.value = "";
    categoryEl.value = "";

    const buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("buttons");

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    buttonsDiv.appendChild(editBtn);

    const saveBtn = document.createElement("button");
    saveBtn.classList.add("save-btn");
    buttonsDiv.appendChild(saveBtn);

    liEl.appendChild(buttonsDiv);

    editBtn.addEventListener("click", handleEditAction);

    function handleEditAction(e) {
      nameInputEl.value = namePEl.textContent.split(":")[1];
      numberInputEl.value = numberPEl.textContent.split(":")[1];
      categoryEl.value = categoryPEl.textContent.split(":")[1];

      const currentEditBtn = e.currentTarget;
      const currentLiEl = currentEditBtn.parentElement.parentElement;

      currentLiEl.remove();
    }

    saveBtn.addEventListener("click", handleSaveAction);

    function handleSaveAction(e) {
      contactListItem.appendChild(liEl);

      editBtn.remove();
      saveBtn.remove();

      const deleteBtn = document.createElement("button");
      deleteBtn.classList.add("del-btn");

      liEl.appendChild(deleteBtn);

      deleteBtn.addEventListener("click", handleDeleteAction);

      function handleDeleteAction() {
        liEl.remove();
      }
    }
  }
}
