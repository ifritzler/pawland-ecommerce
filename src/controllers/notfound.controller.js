import view from "../views/404.js";

export default () => {
  const divElement = document.createElement('div');
  divElement.innerHTML = view();
  return divElement;
};
