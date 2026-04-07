function applyFilters(categoryBoxes, priceRange, ratingBoxes, productsData) {
  const selectedCategories = [...categoryBoxes]
    .filter((box) => box.checked)
    .map((box) => box.value);

  let filteredProducts = productsData;

  if (selectedCategories.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      selectedCategories.includes(product.category.toLowerCase()),
    );
  }

  filteredProducts = filteredProducts.filter(
    (product) => product.price <= Number(priceRange.value),
  );

  //get selected checkboxes from the rating elements
  const selectratings = [...ratingBoxes]
    .filter((box) => box.checked)
    .map((box) => Number(box.value));

  if (selectratings.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      selectratings.includes(product.rating),
    );
  }
  return filteredProducts;
  //   renderProducts(filteredProducts); //should be inside the event listener because the products should render on each change in category
}

function searchFilter(searchInput, productsData) {
  const query = searchInput.value.toLowerCase();
  const filteredProducts = productsData.filter((product) =>
    product.name.toLowerCase().includes(query),
  );

  return filteredProducts;
}
export { searchFilter,applyFilters };
