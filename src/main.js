// importaciones js de bootstrap optimizadas
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
// Utils
import { getHashAndParams } from './utils.js'

// Routers
import Router from './router/index.routes.js'

const routerFlow = () => {
  const {hash, params} = getHashAndParams(location);
  Router({hash, params});
}

window.addEventListener("popstate", routerFlow);
window.addEventListener("DOMContentLoaded", routerFlow);
