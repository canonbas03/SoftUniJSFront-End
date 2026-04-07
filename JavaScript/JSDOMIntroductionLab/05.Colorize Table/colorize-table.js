function colorize() {
  let evenTrEls = document.querySelectorAll("tbody tr:nth-child(even)");

  for (const trEl of evenTrEls) {
    trEl.style.backgroundColor = "teal";
  }
}
