import view from "../views/cart.js";

export default () => {
  const divElement = document.createElement('div');
  divElement.innerHTML = view();
  return divElement;
};
