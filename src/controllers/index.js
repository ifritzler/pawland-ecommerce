import Home from "./index.controller.js";
import Store from "./store.controller.js";
import Cart from "./cart.controller.js";
import NotFound from "./notfound.controller.js";

const pages = {
  home: Home,
  store: Store,
  notFound: NotFound,
  cart: Cart
}

export default pages;
