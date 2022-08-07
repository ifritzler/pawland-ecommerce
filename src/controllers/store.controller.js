import view from "../views/store.js";
import getProducts from "../services/products.js";
import filterProducts from "../services/filterProducts.js";
import { createCardProduct } from "../components/storeCardProduct.js";

export default async ({ category: categories, priceFilterObject = {} }) => {
  const fragment = document.createElement("div");
  fragment.innerHTML = view();

  const listProducts = fragment.querySelector("#list-product");
  const data = await getProducts();
  const { minPrice, maxPrice } = priceFilterObject;
  const products = filterProducts(data, { categories, minPrice, maxPrice });

  let cards = "";
  products.forEach((product) => {
    const { id, title, categories, price, img, description } = product;
    cards += createCardProduct(product);
  });

  listProducts.innerHTML = cards;
  return fragment;
};
