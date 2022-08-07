import { filterByCategory } from "./filterByCategory.js";
import filterByPrice from "./filterByPrice.js";

function filterProducts(products,
  { categories, minPrice = 0, maxPrice = null }) {
  let filtered = [ ...products ];
  filtered = filterByCategory(filtered, categories);
  filtered = filterByPrice(filtered, { minPrice, maxPrice });
  return filtered;
}
export default filterProducts;
