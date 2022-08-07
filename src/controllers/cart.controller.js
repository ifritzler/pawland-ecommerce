import { basketItemCard } from "../components/basketItemCard.js";
import { getBasketCopy, getTotalBasket } from "../services/basket.js";
import view from "../views/cart.js";



const renderBasket = () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = view();

  const basketContainer = divElement.querySelector("#baket-items-container");
  const basketSubTotal = divElement.querySelector("#basket-subtotal");
  const basketDiscount = divElement.querySelector("#basket-discount");
  const basketTotal = divElement.querySelector("#basket-total");

  const cart = getBasketCopy();

  let innerHtml = "";
  // Sumo los totales del carrito para luego imprimirlos
  let total = getTotalBasket(cart);
  let discount = 0;

  Object.values(cart).forEach((item) => {
    innerHtml += basketItemCard(item);
  });

  basketContainer.innerHTML = innerHtml;
  basketSubTotal.innerHTML = `$${total}`;
  basketDiscount.innerHTML = `-$0`;
  basketTotal.innerHTML = `$${total - discount}`;

  return divElement;
};

export default renderBasket;


