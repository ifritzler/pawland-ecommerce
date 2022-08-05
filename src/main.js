// importaciones css de bootstrap optimizadas, vienen de un archivo .scss modificado
import "./sass/main.scss";
// importaciones js de bootstrap optimizadas
import { Collapse } from "bootstrap";

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
