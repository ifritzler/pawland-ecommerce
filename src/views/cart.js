const form = `
<form id="form-add-discount">
  <div class="column mb-3">
    <label for="inputEmail3" class="col-12 col-form-label fw-bolder">CODIGO PROMOCIONAL</label>
    <div class="col-12">
      <input type="text" class="form-control" id="inputEmail3">
    </div>
  </div>
  <button id="btn-add-promo" type="submit" class="btn btn-primary col-12">AGREGAR</button>
</form>
`

export const resume = () => {
  return `
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
    <div class="vstack" style="min-width:250px;">
      ${form}
    </div>
  </div>
`
}

export default () => {
  const html = `
  <div class="d-flex flex-row flex-column flex-md-row justify-content-center gap-3">
    <div>
      <div class ="d-flex flex-column">
        <div class="flex-grow-1" id="baket-items-container"></div>
      </div>
    </div>
    <div class="d-flex flex-column gap-3" id="resume-basket">
    </div>
  </div>
  `;
  return html;
};

