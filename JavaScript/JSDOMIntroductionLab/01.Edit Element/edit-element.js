function editElement(htmlEl, wordToReplace, replacer) {
  const originalText = htmlEl.textContent;
  let updatedText = originalText.replaceAll(wordToReplace, replacer);

  htmlEl.textContent = updatedText;
}
