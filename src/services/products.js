const getProducts = async () => {
  // Esta master key no deberia ser pasada en este codigo. Solo esta colocada a fines practicos de pruebas.
  // Lo correcto seria traer esa key desde el enviroment
  const response = await fetch(
    "https://api.jsonbin.io/v3/b/62eca814a1610e6386ef7862",
    {
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key":
          "$2b$10$E.eCKhOPwA19ekos35u2XuJINdD/33WxaZVB.S1iGkS62elyoFhAi",
      },
    }
  );
  const { record } = await response.json();
  const { products } = record;
  return products;
};

export default getProducts;

