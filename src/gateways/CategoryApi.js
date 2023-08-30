import categories from '../mocks/categories';

class CategoryApi {
  // eslint-disable-next-line class-methods-use-this
  getCategories() {
    return categories;
  }
}

export const categoryApi = new CategoryApi();
