import { data } from "./exportData.js";

data.then((product)=>{
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
        button.dataset.id=item.id;
        card.appendChild(button);

        productContainer.appendChild(card);
    })
    maincontainer.appendChild(productContainer);
    
})
document.querySelector(".main").addEventListener("click", (e) => {
  if (e.target.classList.contains("addToCart")) {
    console.log(e.target.dataset.id);
  } 
});