function sumTable() {
  const priceTdEls = Array.from(
    document.querySelectorAll("tbody tr td:nth-child(2)"),
  );
  const sumTdEl = priceTdEls.pop();

  let sum = 0;
  for (const tdEl of priceTdEls) {
    sum += Number(tdEl.textContent);
  }

  sumTdEl.textContent = sum;
}
