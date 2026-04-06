import { data } from "./exportData.js";
import { renderProducts } from "./products.js";
import { updateCart, updateCartSummary, cartData, renderCart } from "./cart.js";
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
function applyFilters() {
  const selectedCategories = [...categoryBoxes]
    .filter((box) => box.checked)
    .map((box) => box.value);

  let filteredProducts = productsData; // start with all

  
  if (selectedCategories.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      selectedCategories.includes(product.category.toLowerCase()),
    );
  }

  
  filteredProducts = filteredProducts.filter(
    (product) => product.price <= Number(priceRange.value),
  );

  renderProducts(filteredProducts); //should be inside the event listener because the products should render on each change in category
}
categoryBoxes.forEach((box) => {
  box.addEventListener("change", applyFilters);
});
//filter based on price range
const priceRange = document.querySelector("#priceRange");
const priceValue = document.querySelector("#priceValue");
priceRange.addEventListener("input", (e) => {
  priceValue.textContent = `${priceRange.value}`;
  applyFilters();
});
