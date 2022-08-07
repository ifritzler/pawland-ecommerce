import view from "../views/store.js";
import getProducts from "../services/products.js";
import filterProducts from "../services/filterProducts.js";

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
    cards += `
    <div class="col">
      <div class="card h-100">
        <img src="${img}" class="card-img-top p-4" alt="...">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${description.slice(0, 77) + "..."}</p>
        </div>
        <div class="card-footer d-flex justify-content-around">
          <strong class="card-price">$${price}</strong>
          <button data-id="${id}" class="btn btn-primary">Agregar al carrito</button>
        </div>
      </div>
    </div>
    `;
  });

  listProducts.innerHTML = cards;
  return fragment;
};
