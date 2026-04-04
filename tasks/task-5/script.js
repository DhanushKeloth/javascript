import { data } from "./exportData.js";

//store the product data in global variable
let productsData = [];
//main container ui
data.then((product) => {
  //store the data
  productsData = product;

  const maincontainer = document.querySelector(".main");

  const productContainer = document.createElement("div");
  productContainer.classList.add("products");

  product.forEach((item) => {
    console.log(item.image.slice(9));
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = "./assets/" + item.image.slice(9);
    card.appendChild(img);

    const h3 = document.createElement("h3");
    h3.textContent = item.name;
    card.appendChild(h3);

    const p = document.createElement("p");
    p.textContent = item.price;
    card.appendChild(p);

    const button = document.createElement("button");
    button.textContent = "Add to Cart";
    button.classList.add("addToCart");
    button.dataset.id = item.id; //store the id of the item in the dataset

    card.appendChild(button);

    productContainer.appendChild(card);
  });
  maincontainer.appendChild(productContainer);
  renderCart();
});

let cartData = JSON.parse(localStorage.getItem("cart")) || [];
// renderCart();
function renderCart() {
  const cart = document.querySelector(".cart");
  cart.innerHTML = "";
  cartData.forEach((item) => {
    const product = productsData.find((p) => p.id == item.id);

    const cartItems = document.createElement("div");
    cartItems.classList.add("cart-items");

    const imageItem = document.createElement("img");
    imageItem.src = "./assets/" + product.image.slice(9);

    const nameItem = document.createElement("h3");
    nameItem.textContent = product.name;
    console.log(product.name);

    const priceItem = document.createElement("span");
    priceItem.textContent = product.price*item.quantity;

    const cartButtonGroup = document.createElement("div");
    cartButtonGroup.classList.add("buttons-group");

    const decreaseButton = document.createElement("button");
    decreaseButton.textContent = "-";

    const cartItemQuantity = document.createElement("span");
    cartItemQuantity.textContent = item.quantity;

    const increaseButton = document.createElement("button");
    increaseButton.textContent = "+";

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.setAttribute("id", "remove-btn");

    removeButton.addEventListener("click", () => {
      cartData = cartData.filter((c) => c.id != item.id);
      updateCart();
      // cartItems.remove();
    });
    increaseButton.addEventListener("click", () => {
      item.quantity += 1;
      console.log(item.quantity*product.price);
      updateCart();
    });
    decreaseButton.addEventListener("click", () => {
      if(item.quantity>1){

        item.quantity -= 1;
        item.price=item.quantity*product.price;
        updateCart();
      }
      
    });

    cartItems.appendChild(imageItem);
    cartItems.appendChild(nameItem);
    cartItems.appendChild(priceItem);
    cartItems.appendChild(cartButtonGroup);
    cartItems.appendChild(removeButton);

    cartButtonGroup.appendChild(decreaseButton);
    cartButtonGroup.appendChild(cartItemQuantity);
    cartButtonGroup.appendChild(increaseButton);
    cart.appendChild(cartItems);
  });
}
function updateCart() {
  localStorage.setItem("cart", JSON.stringify(cartData));
  renderCart();
}
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
    updateCart();
  }
});
