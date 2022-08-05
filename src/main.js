// importaciones js de bootstrap optimizadas
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
// Utils
import { getHashAndParams } from './utils.js'

// Routers
import Router from './router/index.routes.js'

const routerFlow = (event) => {
  const {hash, params} = getHashAndParams(location);
  Router({hash, params});
}

window.addEventListener("popstate", (event) => routerFlow(event));
window.addEventListener("DOMContentLoaded", (event) => routerFlow(event));
