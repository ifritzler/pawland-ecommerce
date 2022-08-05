import pages from "../controllers/index.js";

const root = document.getElementById("root");
const state = {
  loading: false,
};

const getLoader = () => {
  const loader = document.createElement("div");
  const html = `
  <div class="d-flex justify-content-center">
    <div class="spinner-border" style="width: 5rem; height: 5rem;" role="status">
      <span class="visually-hidden"></span>
    </div>
  </div>
  `
  loader.classList.add('vh-100', 'd-flex', 'align-items-center', 'justify-content-center', );
  loader.innerHTML = html;
  return loader;
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
    case "#/carrito":
      return root.appendChild(pages.cart());
    default:
      return root.appendChild(pages.notFound());
  }
};

export default router;
