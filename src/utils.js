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

export { getHashAndParams };
