export const basketItemCard = (basketItem) => {
  const { id, img, price, title, quantity, total } = basketItem;
  return `
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-4 d-flex justify-content-center align-items-center">
          <img src="${img}" class="img-fluid rounded-start" style="max-height:100px;" alt="Imagen de ${title}">
        </div>
        <div class="col-6">
          <div class="card-body d-flex flex-column align-items-center h-100">
            <h5 class="card-title flex-grow-1">${title}</h5>
            <p class="card-text flex-grow-1">Cantidad: ${quantity}</p>
            <p class="card-text flex-grow-1"><small class="text-muted">Precio Unitario: $${price}</small></p>
            <p class="card-text flex-grow-1"><small class="text-muted">Subtotal: $${total}</small></p>
          </div>
        </div>
        <div class="col-2 d-flex align-items-center">
          <button class="btn btn-danger d-flex justify-content-center align-items-center">
            <span class="material-symbols-outlined" data-id=${id}>delete</span>
          </button>
        </div>
      </div>
    </div>
  `;
};
