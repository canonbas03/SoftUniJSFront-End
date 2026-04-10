function addItem() {
  const itemsUlEls = document.getElementById("items");
  const newItemtextEl = document.getElementById("newItemText");

  const text = newItemtextEl.value.trim();

  const liEl = document.createElement("li");
  liEl.textContent = text;

  const deleteAEl = document.createElement("a");
  deleteAEl.href = "#";
  deleteAEl.textContent = "[Delete]";

  liEl.appendChild(deleteAEl);
  itemsUlEls.appendChild(liEl);

  deleteAEl.addEventListener("click", deleteListItem);

  function deleteListItem(e) {
    e.target.parentElement.remove();
  }
}
