const showToastNotification = ({ title }, callback = null) => {
  Toastify({
    text: `${title} fue agregado!`,
    duration: 3000,
    destination: "#/carrito",
    newWindow: false,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "rgba(255, 208, 0, 1)",
      color: "rgba(24, 24, 24, 1)",
      fontSize: "16px",
    },
    onClick: callback ? callback : null, // Callback after click
  }).showToast();
};

/**
 * Esta funcion es un controlador que maneja la obtencion del hash y los params si existiesen.
 * Permite mayor flexibilidad a la hora de hablar de una SPA realizada con vanilla js.
 * Este algoritmo fue desarrollado por git:hub @ifritzler
 * @returns
 */
const getHashAndParams = () => {
  const { hash: pureHash } = location;
  const [hash, query] = pureHash.split("?");
  const paramsObject = {};

  const response = {
    hash: hash === "" ? "#/" : hash,
    params: {},
  };
  // Esta linea debajo actualiza la url al ingresar al sitio ya que de otra manera no existiria hash alguno
  // y se romperia un poco el concepto de spa en cuanto a la url que se visualiza en pantalla.
  // Tambien sirve para llevar registro en el historial de que se visito la pagina principal
  response.hash === "#/"
    ? window.history.pushState({}, "", response.hash)
    : null;

  if (!query) return response;

  try {
    // Separa una cadena como esta: 'category=perro&category=alimento' en un array:
    // ['category=perro', 'category=alimento']
    const arrayValues = query.split("&");

    // Por cada elemento de este array compongo un objeto con elementos clave valor para obtener
    // query params
    arrayValues.forEach((element) => {
      const [prop, value] = element.split("=");
      if (!paramsObject.hasOwnProperty(prop)) {
        paramsObject[prop] = [value];
      } else {
        paramsObject[prop].push(value);
      }
    });
    response.params = { ...paramsObject };
  } catch (error) {
    console.error(error);
    return {
      hash: "#/",
      params: {},
    };
  }
  return response;
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

export { getHashAndParams, getLoader, showToastNotification };
