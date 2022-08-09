import pages from "../controllers/index.js";
import { getLoader } from "../utils.js";
import { renderBasketResume } from "../controllers/cart.controller.js";

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
      pages.store(params).then((response) => {
        root.innerHTML = "";
        return root.appendChild(response);
      });
      break;
    }
    case "#/carrito": {
      root.innerHTML = "";
      root.appendChild(pages.cart());
      renderBasketResume();
      const form = document.querySelector("#form-add-discount");
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const discountCode = e.target.querySelector('input').value
        if(discountCode !== ""){
          renderBasketResume(discountCode)
        }
      });
      return;
    }
    default:
      root.innerHTML = "";
      return root.appendChild(pages.notFound());
  }
};

export default router;
