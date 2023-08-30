import products from '../mocks/products';

class ProductApi {
  // eslint-disable-next-line class-methods-use-this
  getProducts() {
    return products;
  }
}

// eslint-disable-next-line import/prefer-default-export
export const productApi = new ProductApi();
