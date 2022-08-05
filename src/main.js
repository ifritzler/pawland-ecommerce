import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/main.scss";

import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/collapse";

// Utils
import { getHashAndParams } from './utils'

// Routers
import Router from './router/index.routes'

const routerFlow = (event) => {
  const {hash, params} = getHashAndParams(location);
  Router({hash, params});
}

window.addEventListener("popstate", (event) => routerFlow(event));
window.addEventListener("DOMContentLoaded", (event) => routerFlow(event));
