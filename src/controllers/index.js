import Home from "./index.controller";
import Store from "./store.controller";
import Cart from "./cart.controller";
import NotFound from "./notfound.controller";

const pages = {
  home: Home,
  store: Store,
  notFound: NotFound,
  cart: Cart
}

export default pages;
