import { basketItemCard } from "../components/basketItemCard.js";
import { getBasketCopy, getTotalBasket } from "../services/basket.js";
import view from "../views/cart.js";
import { resume } from "../views/cart.js";

const discounts = {
  'PAWDISCOUNT15': 0.15,
  'PAWDISCOUNT30': 0.30,
}

export const renderBasketResume = (discountCode) => {
  const divElement = document.createElement("div");
  divElement.innerHTML = resume();
  const resumeBasketElement = document.querySelector("#resume-basket");
  console.log(resumeBasketElement)
  const basketSubTotal = divElement.querySelector("#basket-subtotal");
  const basketDiscount = divElement.querySelector("#basket-discount");
  const basketTotal = divElement.querySelector("#basket-total");

  // Sumo los totales del carrito para luego imprimirlos
  const cart = getBasketCopy();
  let total = getTotalBasket(cart);
  let discount = 0;

  if(discountCode){
    discount = discounts[discountCode] ? total * discounts[discountCode] : 0
  }

  basketSubTotal.innerHTML = `$${total}`;
  basketDiscount.innerHTML = `-$${discount}`;
  basketTotal.innerHTML = `$${total - discount}`;
  
  resumeBasketElement.innerHTML = "";
  resumeBasketElement.appendChild(divElement)
}

const renderBasket = () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = view();
  const basketContainer = divElement.querySelector("#baket-items-container");
  const cart = getBasketCopy();
  let innerHtml = "";

  Object.values(cart).forEach((item) => {
    innerHtml += basketItemCard(item);
  });

  basketContainer.innerHTML = innerHtml;

  return divElement;
};

const Cart = () => {
  const divElement = document.createElement("div");
  divElement.appendChild(renderBasket())
  return divElement
}

export default Cart;


