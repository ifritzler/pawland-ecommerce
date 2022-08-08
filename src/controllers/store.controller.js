import view from "../views/store.js";
import {getProducts, getProductById} from "../services/products.js";
import filterProducts from "../services/filterProducts.js";
import { createCardProduct } from "../components/storeCardProduct.js";
import { addProduct } from "../services/basket.js";

export default async ({ category: categories, priceFilterObject = {} }) => {
  const fragment = document.createElement("div");
  fragment.innerHTML = view();

  const listProducts = fragment.querySelector("#list-product");
  const data = await getProducts();
  const { minPrice, maxPrice } = priceFilterObject;
  const products = filterProducts(data, { categories, minPrice, maxPrice });

  let cards = "";
  products.forEach((product) => {
    cards += createCardProduct(product);
  });

  listProducts.innerHTML = cards;
  const buttons = listProducts.querySelectorAll('button')
  Array.from(buttons).forEach(btn => {
    btn.addEventListener('click', async function() {
      addProduct(await getProductById(Number(btn.dataset.id)))
    })
  })
  return fragment;
};
