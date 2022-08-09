import view from "../views/home.js";

export default () => {
  const divElement = document.createElement('div');
  divElement.classList.add("hero");
  divElement.innerHTML = view();
  return divElement;
};
