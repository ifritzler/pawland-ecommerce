import pages from "../controllers/index.js";
import { getLoader } from "../utils.js";

const root = document.getElementById("root");
const state = {
  loading: false,
};

const router = ({ hash: route, params }) => {
  root.innerHTML = "";
  root.appendChild(getLoader());
  switch (route) {
    case "#/": {
      root.innerHTML = "";
      return root.appendChild(pages.home());
    }
    case "#/tienda": {
      pages.store(params).then(response => {
        root.innerHTML = "";
        return root.appendChild(response);
      });
      break;
    }
    case "#/carrito":
      return root.appendChild(pages.cart());
    default:
      return root.appendChild(pages.notFound());
  }
};

export default router;
