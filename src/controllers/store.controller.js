// Este import gracias a webpack me permite editar el codigo html en un archivo html como tal y luego traerlo
import View from "../views/store.html";

export default () => {
  const divElement = document.createElement('div');
  divElement.innerHTML = View;
  return divElement;
};
