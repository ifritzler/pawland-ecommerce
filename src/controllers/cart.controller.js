import { basketItemCard } from "../components/basketItemCard.js";
import { deleteItem, getBasketCopy, getTotalBasket } from "../services/basket.js";
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
  const title = `<span class="badge bg-primary">Productos</span>`
  divElement.innerHTML += title;
  divElement.innerHTML += view();
  const basketContainer = divElement.querySelector("#baket-items-container");
  const cart = getBasketCopy();
  let innerHtml = "";

  Object.values(cart).forEach((item) => {
    innerHtml += basketItemCard(item);
  });

  basketContainer.innerHTML = innerHtml;
  Array.from(basketContainer.querySelectorAll('button')).forEach(button => {
    button.addEventListener('click', (e) => {
      const id = e.target.dataset.id;
      console.log(e.target)
      const container = document.getElementById('baket-items-container');
      deleteItem(id)
      container.innerHTML = ""
      container.appendChild(renderBasket())
    })
  })


  return divElement;
};

const Cart = () => {
  const divElement = document.createElement("div");
  divElement.classList.add('row')
  divElement.appendChild(renderBasket())
  return divElement
}

export default Cart;
