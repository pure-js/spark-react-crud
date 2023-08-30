import products from '../mocks/products';

class ProductApi {
  // eslint-disable-next-line class-methods-use-this
  getProducts() {
    return products;
  }
}

export const productApi = new ProductApi();
