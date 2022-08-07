export function filterByCategory(products, categories) {
  if (categories) {
    return products.filter((product) => product.categories.some((c) => categories.includes(c))
    );
  }
  return products;
}
