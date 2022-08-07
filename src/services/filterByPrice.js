function filterByPrice(products, { minPrice, maxPrice }) {
  let filtered = [ ...products ];

  if (minPrice) {
    filtered = filtered.filter((product) => {
      return product.price >= minPrice;
    });
  }
  if (maxPrice) {
    filtered = filtered.filter((product) => {
      return product.price <= maxPrice;
    });
  }
  return filtered;
}
export default filterByPrice;
