import { data } from "./exportData.js";

//store the product data in global variable
let productsData =[];

data.then((product)=>{
    //store the data
    productsData=product;

    const maincontainer = document.querySelector(".main");
    
    const productContainer = document.createElement("div")
    productContainer.classList.add("products");

    product.forEach((item)=>{
        console.log(item.image.slice(9))
        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.src='./assets/'+item.image.slice(9);
        card.appendChild(img);

        const h3 = document.createElement("h3");
        h3.textContent=item.name;
        card.appendChild(h3);

        const p = document.createElement("p");
        p.textContent=item.price;
        card.appendChild(p);

        const button = document.createElement("button");
        button.textContent="Add to Cart";
        button.classList.add("addToCart");
        button.dataset.id=item.id; //store the id of the item in the dataset
        
        card.appendChild(button);

        productContainer.appendChild(card);
    })
    maincontainer.appendChild(productContainer);
    
})

document.querySelector(".main").addEventListener("click", (e) => {
  if (e.target.classList.contains("addToCart")) {
    const id=e.target.dataset.id;
    //can also be done using map method 
    // const productMap = new Map();
    // productsData.forEach((item)=>{
      //   productMap.set(item.id,item);
      // })

    
    

    const product = productsData.find((item)=>item.id==id);
    console.log(product)
    
    const cart  = document.querySelector(".cart");
    
    const cartItems = document.createElement("div");
    cartItems.classList.add("cart-items");

    const imageItem = document.createElement("img");
    imageItem.src='./assets/'+product.image.slice(9);

    const nameItem = document.createElement("h3");
    nameItem.textContent=product.name;

    const priceItem = document.createElement("span");
    priceItem.textContent=product.price;

    const cartButtonGroup = document.createElement("div");
    cartButtonGroup.classList.add("buttons-group");

    const decreaseButton = document.createElement("button")
    decreaseButton.textContent="-";

    const cartItemQuantity = document.createElement("span");
    cartItemQuantity.textContent=1;

    const increaseButton = document.createElement("button")
    increaseButton.textContent="+";

    const removeButton = document.createElement("button");
    removeButton.textContent="Remove";
    removeButton.setAttribute("id","remove-btn");

    removeButton.addEventListener("click",(e)=>{
      cartItems.remove();
    })

    cartItems.appendChild(imageItem);
    cartItems.appendChild(nameItem);
    cartItems.appendChild(priceItem);
    cartItems.appendChild(cartButtonGroup);
    cartButtonGroup.appendChild(decreaseButton);
    cartButtonGroup.appendChild(cartItemQuantity);
    cartButtonGroup.appendChild(increaseButton);
    cartItems.appendChild(removeButton);
    cart.appendChild(cartItems);

    //increase quantity 
    increaseButton.addEventListener("click",()=>{
      cartItemQuantity.textContent++;
      let finalprice=product.price*cartItemQuantity.textContent;
      priceItem.textContent=Number(finalprice.toFixed(2));
    })
    //decrease quantity
    decreaseButton.addEventListener("click",(e)=>{
      if(cartItemQuantity.textContent>1){
        cartItemQuantity.textContent--;
        let finalprice = product.price*cartItemQuantity.textContent;
        priceItem.textContent=Number(finalprice.toFixed(2))
      }
    })
  
    //add the cart items to the loca storage
    // let cartItemsData = JSON.parse(localStorage.getItem("cartItems")) || [];
    // cartItemsData.push(product.id);
    // localStorage.setItem("cartItems",JSON.stringify(cartItemsData));
  } 
});