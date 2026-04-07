import { data } from "./exportData.js";
import { renderProducts } from "./products.js";
import { updateCart, updateCartSummary, cartData, renderCart } from "./cart.js";
import { searchFilter, applyFilters } from "./filters.js";
//store the product data in global variable
let productsData = [];
//main
data.then((products) => {
  productsData = products;
  renderProducts(products);
  renderCart(products);
  updateCartSummary(products);
});

document.querySelector(".main").addEventListener("click", (e) => {
  if (e.target.classList.contains("addToCart")) {
    const id = e.target.dataset.id;

    // check if the item is already in the cart so instead of adding the duplicate we can increase the quantity
    const existingItem = cartData.find((item) => item.id == id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cartData.push({
        id: id,
        quantity: 1,
      });
    }
    updateCart(productsData);
    updateCartSummary(productsData);
  }
});

//filter products by category input checkboxes
const categoryBoxes = document.querySelectorAll(
  ".sidebar #categoryFilter input[type='checkbox']",
); //used to select the category boxes

categoryBoxes.forEach((box) => {
  box.addEventListener("change", () => {
    const filteredProducts = applyFilters(
      categoryBoxes,
      priceRange,
      ratingBoxes,
      productsData,
    );
    renderProducts(filteredProducts);
  });
});

//filter based on price range
const priceRange = document.querySelector("#priceRange");
const priceValue = document.querySelector("#priceValue");
priceRange.addEventListener("input", (e) => {
  priceValue.textContent = `${priceRange.value}`;
  const filteredProducts = applyFilters(
    categoryBoxes,
    priceRange,
    ratingBoxes,
    productsData,
  );
  renderProducts(filteredProducts);
});

//filter products by rating
const ratingBoxes = document.querySelectorAll("#rating-filter input");
ratingBoxes.forEach((box) => {
  box.addEventListener("change", () => {
    const filteredProducts = applyFilters(
      categoryBoxes,
      priceRange,
      ratingBoxes,
      productsData,
    );
    renderProducts(filteredProducts);
  });
});

//search filters by name
const searchInput = document.querySelector("#search-product");
searchInput.addEventListener("input", (e) => {
  const filteredProducts = searchFilter(searchInput, productsData);
  renderProducts(filteredProducts);
});
