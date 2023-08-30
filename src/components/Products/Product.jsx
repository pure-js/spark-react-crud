import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  List,
  ListItem,
  Typography,
  CardActions,
  Button,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import { Link as RouterLink } from 'react-router-dom';

import dayjs from 'dayjs';

const shortDateFormat = 'MM/DD/YYYY';
const longDateFormat = 'MM/DD/YYYY hh:mm a';

const Product = ({ product }) => {
  const receiptDate = product.receiptDate
    ? dayjs(product.receiptDate).format(shortDateFormat)
    : '-';
  const expirationDate = product.expirationDate
    ? dayjs(product.expirationDate).format(shortDateFormat)
    : '-';
  const createdAt = product.createdAt
    ? dayjs(product.createdAt).format(longDateFormat)
    : '-';

  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {product.name}
        </Typography>
        <List>
          <ListItem>
            Brand:
            {product.brand}
          </ListItem>
          <ListItem>
            Rating:
            {product.rating}
          </ListItem>
          <ListItem>
            Featured:
            {product.featured ? 'Yes' : 'No'}
          </ListItem>
          <ListItem>
            Items In Stock:
            {product.itemsInStock}
          </ListItem>
          <ListItem>
            Categories:
            <ul>
              {product.categories.map((category) => (
                <li key={category.id}>{category.name}</li>
              ))}
            </ul>
          </ListItem>
          <ListItem>
            Receipt Date:
            {receiptDate}
          </ListItem>
          <ListItem>
            Expiration Date:
            {expirationDate}
          </ListItem>
          <ListItem>
            Created At:
            {createdAt}
          </ListItem>
        </List>
      </CardContent>
      <CardActions disableSpacing>
        <Button to="edit" component={RouterLink}>
          <EditIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

Product.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  product: PropTypes.object.isRequired,
};

export default Product;
