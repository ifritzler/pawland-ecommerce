const router = ({hash: route, params}) => {
  switch ( route ) {
    case '#/': 
      console.log('Home page');
      break;
    case '#/tienda': 
      console.log('Products page');
      break;
      case '#/carrito': 
      console.log('Cart page');
      break;
    default:
      console.log('404 - Pagina no encontrada')
      break;
  }
}

export default router;
