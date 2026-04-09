function solve() {
  const townsListEls = document.querySelectorAll("#towns li");
  const searchTextEl = document.getElementById("searchText");
  const resultEl = document.getElementById("result");

  clearOld();

  let searchVal = searchTextEl.value;
  let resultCount = 0;
  townsListEls.forEach((townEl) => {
    const isMatch = townEl.textContent
      .toLowerCase()
      .includes(searchVal.toLowerCase());

    if (!isMatch) {
      return;
    }

    townEl.style.textDecoration = "underline";
    townEl.style.fontWeight = "bold";
    townEl.style.opacity = 1;

    resultCount++;
  });

  resultEl.textContent = `${resultCount} matches found`;

  function clearOld() {
    townsListEls.forEach((townEl) => {
      townEl.style.textDecoration = "none";
      townEl.style.fontWeight = "";
      townEl.style.opacity = 0.5;
    });
  }
}
