import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { Fab, Grid } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import _chunk from 'lodash/chunk';
import Product from './Product';

const ProductList = ({ products }) => {
  const productsGroups = _chunk(products, 3);

  return (
    <Grid container spacing={2}>
      {productsGroups.map((productsGroup, index) => (
        <Fragment key={index}>
          {productsGroup.map((product) => (
            <Grid item sm="6" md="4" key={product.id}>
              <Product product={product} />
            </Grid>
          ))}
        </Fragment>
      ))}
      <Fab to="/add" component={RouterLink} color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </Grid>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductList;
