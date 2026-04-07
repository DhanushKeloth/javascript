//cart
let cartData = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart(productsData) {
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

    const priceItem = document.createElement("span");
    priceItem.textContent = (product.price * item.quantity).toFixed(2);

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
      updateCart(productsData);
      updateCartSummary(productsData);
      // cartItems.remove();
    });
    increaseButton.addEventListener("click", () => {
      item.quantity += 1;

      updateCart(productsData);
      updateCartSummary(productsData);
    });
    decreaseButton.addEventListener("click", () => {
      if (item.quantity > 1) {
        item.quantity -= 1;

        updateCart(productsData);
        updateCartSummary(productsData);
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
function updateCart(productsData) {
  const cartIconRibbon = document.querySelector(".cart-count");
  localStorage.setItem("cart", JSON.stringify(cartData));
  cartIconRibbon.textContent = cartData.length;
  renderCart(productsData);
}

function calculateSubtotal(productsData) {
  const subtotal = cartData.reduce((acc, item) => {
    const product = productsData.find((p) => p.id == item.id);
    return acc + product.price * item.quantity;
  }, 0);
  return subtotal.toFixed(2);
}

function updateCartSummary(productsData) {
  const totalitems = cartData.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);
  const subtotal = Number(calculateSubtotal(productsData));
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  document.querySelector("#total-items").textContent = totalitems;
  document.querySelector("#subtotal").textContent = subtotal.toFixed(2);
  document.querySelector("#tax").textContent = tax.toFixed(2);
  document.querySelector("#total-price").textContent = total.toFixed(2);
}

export { renderCart, updateCart, updateCartSummary, cartData };
