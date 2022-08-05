// Este import gracias a webpack me permite editar el codigo html en un archivo html como tal y luego traerlo
import view from "../views/store.js";

const getProducts = async (categories) => {
  // Esta master key no deberia ser pasada en este codigo. Solo esta colocada a fines practicos de pruebas.
  // Lo correcto seria traer esa key desde el enviroment
  const response = await fetch(
    "https://api.jsonbin.io/v3/b/62eca814a1610e6386ef7862",
    {
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key":
          "$2b$10$E.eCKhOPwA19ekos35u2XuJINdD/33WxaZVB.S1iGkS62elyoFhAi",
      },
    }
  );
  const { record } = await response.json();
  const { products } = record;
  if(categories) {
    return products.filter(product => {
      return product.categories.some(c => categories.includes(c))
    })
  }
  return products;
};

const filterProductsByCategory = (products, categories) => {
  
}

export default async ({ category: categories, price }) => {
  const products = await getProducts(categories);

  const fragment = document.createElement("div");
  fragment.innerHTML = view();

  const listProducts = fragment.querySelector("#list-product");

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
