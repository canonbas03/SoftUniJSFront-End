function solve(store, orders) {
  let storeProducts = getProductInfo(store);
  let orderedProducts = getProductInfo(orders);

  addProductsToStore(storeProducts, orderedProducts);

  printStore(storeProducts);

  function getProductInfo(input) {
    let result = {};
    for (let i = 0; i < input.length; i += 2) {
      let productName = input[i];
      let productQty = Number(input[i + 1]);

      result[productName] = productQty;
    }

    return result;
  }

  function addProductsToStore(store, products) {
    for (const productName in products) {
      if (!store[productName]) {
        store[productName] = 0;
      }

      store[productName] += products[productName];
    }
  }

  function printStore(products) {
    for (const productName in products) {
      console.log(`${productName} -> ${products[productName]}`);
    }
  }
}
solve(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],

  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"],
);
