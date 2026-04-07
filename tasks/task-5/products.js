
function createProductCard(item) {
  const card = document.createElement("div");
  card.classList.add("card");

  const img = document.createElement("img");
  img.src = "./assets/" + item.image.slice(9);

  const h3 = document.createElement("h3");
  h3.textContent = item.name;

  const p = document.createElement("p");
  p.textContent = item.price;
  // console.log(item.rating)
  const ratingContainer = document.createElement("div");
  ratingContainer.classList.add("rating-container");
  const star = document.createElement("span");
  for(let i=0;i<item.rating;i++){
      star.textContent+="⭐";
  }
  const rating = document.createElement("span");
  rating.textContent=item.rating;
  ratingContainer.appendChild(star);
  ratingContainer.appendChild(rating);
  
  const button = document.createElement("button");
  button.textContent = "Add to Cart";
  button.classList.add("addToCart");
  button.dataset.id = item.id;
  
  card.appendChild(img);
  card.appendChild(h3);
  card.appendChild(p);
  card.appendChild(ratingContainer);
  card.appendChild(button);

  return card;
}
function renderProducts(products){
    
    const maincontainer = document.querySelector(".main");
    maincontainer.innerHTML=""; //clear the old products
    const productContainer = document.createElement("div");
    productContainer.classList.add("products");
    if(products.length===0){
        const p = document.createElement("p");
        p.textContent="No products found";
        productContainer.appendChild(p);
    }else{
        products.forEach((item) => {
          const card = createProductCard(item);
          productContainer.appendChild(card);
        });
    }
  
    maincontainer.appendChild(productContainer);
}
export {renderProducts};