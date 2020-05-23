import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';
import { Container, Row, Col } from 'reactstrap'
import _chunk from 'lodash/chunk'

const ProductList = ({ products }) => {
  const productsGroups = _chunk(products, 3)

  return (
    <Container>
      {productsGroups.map((productsGroup, index) => (
        <Row key={index} className="mb-5">
          {productsGroup.map(product => (
            <Col sm="4" key={product.id} >
              <Product product={product}/>
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductList;
