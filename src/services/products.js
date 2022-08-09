let listProducts = [];

const getProducts = async () => {
  // Esta master key no deberia ser pasada en este codigo. Solo esta colocada a fines practicos de pruebas.
  // Lo correcto seria traer esa key desde el enviroment
  const lastFecthDate = localStorage.getItem("lastFetchDate");
  const minutsSinceLastFetch =
    (Date.now().toString() - lastFecthDate) / 1000 / 60;

  if (minutsSinceLastFetch > 1 || listProducts.length === 0) {
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
    listProducts = products;
    localStorage.setItem("lastFetchDate", Date.now());
  }
  return listProducts;
};

const getProductById = async (id) => {
  const products = await getProducts();
  const product = products.filter((p) => p.id === Number(id));
  return product[0] || null;
};

export { getProducts, getProductById, listProducts };
