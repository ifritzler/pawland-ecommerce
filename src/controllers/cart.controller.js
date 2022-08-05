// Este import gracias a webpack me permite editar el codigo html en un archivo html como tal y luego traerlo
import view from "../views/cart.js";

export default () => {
  const divElement = document.createElement('div');
  divElement.innerHTML = view();
  return divElement;
};
