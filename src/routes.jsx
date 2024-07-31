import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './components/Main/Main';
import NotFound from './components/NotFound/NotFound';
// eslint-disable-next-line import/no-named-as-default
import AddProduct from './components/Products/AddProduct';
import ProductsContainer from './components/Products/ProductsContainer';

export function getRoutes() {
  return (
    <BrowserRouter basename="/spark-react-crud">
      <Main>
        <Switch>
          <Route exact path="/" component={ProductsContainer} />
          <Route path="/add" component={AddProduct} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Main>
    </BrowserRouter>
  );
}

export default getRoutes;
