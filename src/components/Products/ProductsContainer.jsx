import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import ProductsList from './ProductsList';
import { fetchCategories } from '../../actions/categories';
import { fetchProducts } from '../../actions/products';
import { getCategoriesById } from '../../reducers/categories';

class ProductsContainer extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }

  render() {
    const { products } = this.props;

    return (
      <>
        <Header name="Products" />
        <ProductsList products={products} />
      </>
    );
  }
}

ProductsContainer.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  products: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const categoriesById = getCategoriesById(state);

  const products = state.products.map((product) => {
    const categories = product.categories.map((id) => categoriesById[id]);

    return {
      ...product,
      categories,
    };
  });

  return {
    products,
  };
};

export default connect(mapStateToProps)(ProductsContainer);
