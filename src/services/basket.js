// Inicializacion del carrito
let basket = {};
function basketInit() {
  let cartString = localStorage.getItem("cart");
  if (!cartString) {
    localStorage.setItem("cart", JSON.stringify({}));
  }
  basket = {...JSON.parse(cartString)};
  console.log(basket)
}

// Facilita la lectura de codigo, se encarga de obtener una copia exacta del carrito
// y asi evitar la mutabilidad del mismo
function getBasketCopy() {
  return { ...basket };
};

// Actualiza el carrito con la nueva informacion
function updateBasket(data) {
  const newData = { ...data };
  localStorage.setItem("cart", JSON.stringify(newData));
  basket = JSON.parse(localStorage.getItem("cart"));
};

function getTotalBasket(cart) {
  return Object.keys(cart).reduce(function (previous, key) {
    previous += cart[key].total;
    return previous;
  }, 0);
}

function addProduct(product) {
  const carrito = getCartCopy();
  const { id, img, title, price } = product;
  if (carrito.hasOwnProperty(product.id)) {
    carrito[id].quantity = Number(carrito[id].quantity) + 1;
    carrito[id].total = carrito[id].quantity * carrito[id].price;
  } else {
    carrito[id] = {
      img,
      title,
      price,
      quantity: 1,
      total: price,
    };
  }
  updateBasket(carrito);
};

// Se encarga de renderizar el objeto del carrito
function renderBasket() {
  console.log(basket)
}

export {
  basketInit, 
  getBasketCopy,
  addProduct,
  getTotalBasket
}
