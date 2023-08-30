import categories from '../mocks/categories';

class CategoryApi {
  // eslint-disable-next-line class-methods-use-this
  getCategories() {
    return categories;
  }
}

// eslint-disable-next-line import/prefer-default-export
export const categoryApi = new CategoryApi();
