document.addEventListener("DOMContentLoaded", solve);

function solve() {
  const allAddBtnEls = document.querySelectorAll(".add-product");
  const resultTextareaEl = document.querySelector("textarea");
  const checkoutBtnEl = document.querySelector(".checkout");

  let uniqueProducts = new Set();
  let totalPriceSum = 0;

  for (const addBtn of allAddBtnEls) {
    addBtn.addEventListener("click", handleAddProduct);
  }

  checkoutBtnEl.addEventListener("click", handleCheckout);

  function handleAddProduct(e) {
    const fullProductDivEl = e.target.parentElement.parentElement;

    const productTitleDivEl = fullProductDivEl.querySelector(".product-title");
    const productTitle = productTitleDivEl.textContent;

    const productPriceDivEl = fullProductDivEl.querySelector(
      ".product-line-price",
    );
    const productPrice = Number(productPriceDivEl.textContent);

    resultTextareaEl.append(
      `Added ${productTitle} for ${productPrice.toFixed(2)} to the cart.\n`,
    );

    uniqueProducts.add(productTitle);
    totalPriceSum += productPrice;
  }

  function handleCheckout() {
    const allProductsArr = Array.from(uniqueProducts);
    resultTextareaEl.append(
      `You bought ${allProductsArr.join(", ")} for ${totalPriceSum.toFixed(2)}.`,
    );

    checkoutBtnEl.disabled = true;

    for (const addButton of allAddBtnEls) {
      addButton.disabled = true;
    }
  }
}
