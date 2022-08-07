import view from "../views/home.js";

export default () => {
  const divElement = document.createElement('div');
  divElement.innerHTML = view();
  return divElement;
};
