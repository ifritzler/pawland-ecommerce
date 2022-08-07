export const createCardProduct = (product) => {
  const { img, title, description, price, id } = product;
  return `
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
};
