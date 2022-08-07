export default () => {
  const html = `
  <div class="d-flex flex-row flex-column flex-md-row justify-content-center gap-3">
    <div>
      <span class="badge bg-primary">Productos</span>
      <div class ="d-flex flex-column">
        <div class="flex-grow-1" id="baket-items-container"></div>
      </div>
    </div>
    <div class="vstack" style="min-width:250px;">
      <span class="badge bg-success">Resumen</span>
      <div class="totals card p-4 d-flex align-items-center">
        <div class="d-flex w-100 gap-4 px-2 align-items-center justify-content-between">
          <p>Subtotal</p>
          <p id="basket-subtotal">$0</p>
        </div>
        <div class="d-flex w-100 gap-4 px-2 align-items-center justify-content-between">
          <p>Descuento</p>
          <p class="text-success"><span id="basket-discount">-$0</span></p>
        </div>
        <div class="d-flex w-100 gap-4 px-2 align-items-center justify-content-between">
          <p class="fw-bolder">COSTO TOTAL</p>
          <p id="basket-total" class="fw-bolder">$0</p>
        </div>
      </div>
    </div>
  </div>
  `;
  return html;
};
