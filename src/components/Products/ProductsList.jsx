import React, { Fragment } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Fab, Grid } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import _chunk from 'lodash/chunk';
import PropTypes from 'prop-types';

import Product from './Product';

const ProductList = ({ products }) => {
  const productsGroups = _chunk(products, 3);

  return (
    <Grid container spacing={2}>
      {productsGroups.map((productsGroup, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Fragment key={index}>
          {productsGroup.map((product) => (
            <Grid item sm="6" md="4" key={product.id}>
              <Product product={product} />
            </Grid>
          ))}
        </Fragment>
      ))}
      <Fab
        to="/add"
        component={RouterLink}
        data-testid="add-product-btn"
        color="primary"
        aria-label="add"
      >
        <AddIcon />
      </Fab>
    </Grid>
  );
};

ProductList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  products: PropTypes.array.isRequired,
};

export default ProductList;
