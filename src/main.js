// importaciones js de bootstrap optimizadas

// Utils
import { getHashAndParams } from './utils.js'
// Basket imports
import { basketInit } from "./services/basket.js";
// Routers
import Router from './router/index.routes.js'

basketInit();

const routerFlow = () => {
  const {hash, params} = getHashAndParams(location);
  Router({hash, params});
}

window.addEventListener("popstate", routerFlow);
window.addEventListener("DOMContentLoaded", routerFlow);
