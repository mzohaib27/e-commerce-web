const FakeStoreapi = {
  fetchAllProducts: async () => {
    const resp = await fetch("https://fakestoreapi.com/products");
    const result = await resp.json();
    return result;
  },
  fetchProductsById: async (productId) => {
    const resp = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const result = await resp.json();
    return result;
  },
  fetchProductsBySearchQuery: async (query) => {
    const resp = await fetch("https://fakestoreapi.com/products");
    const products = await resp.json();
    return products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
  },
};

export default FakeStoreapi;
