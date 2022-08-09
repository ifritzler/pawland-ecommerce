export default () => {
  const html = `
  <div class="hero__info container">
    <h2 class="hero__title">
      Pawland te ofrece todo lo que necesitas para tu mascota.
    </h2>
    <p class="hero__description">
      Empresa lider en venta de articulos para mascotas, con vasta experiencia
      en el mercado y ofreciendo siempre la mejor calidad.
    </p>
    <a href="?#/tienda" class="btn btn-carrito"
      >Ingresa a nuestra tienda</a
    >
  </div>
  <div class="hero__image">
    <img
      src="./src/assets/portrait-dog.jpg"
      alt="Perro de pelaje rubio sonriendo"
    />
  </div>
  `
  return html
}
