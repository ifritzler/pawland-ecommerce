import pages from "../controllers/index"

const root = document.getElementById('root');

const router = ({hash: route, params}) => {
  root.innerHTML = "";
  switch ( route ) {
    case '#/': {
      return root.appendChild(pages.home())
    }
    case '#/tienda': 
      return root.appendChild(pages.store())
    case '#/carrito': 
      return root.appendChild(pages.cart())
    default:
      return root.appendChild(pages.notFound())
  }
}

export default router;
