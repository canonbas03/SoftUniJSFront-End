function addItem() {
  const itemsUlEls = document.getElementById("items");
  const newItemtextEl = document.getElementById("newItemText");

  const text = newItemtextEl.value.trim();

  const liEl = document.createElement("li");
  liEl.textContent = text;

  itemsUlEls.appendChild(liEl);
}
