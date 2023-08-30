import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import ProductsContainer from './components/Products/ProductsContainer';
// eslint-disable-next-line import/no-named-as-default
import AddProduct from './components/Products/AddProduct';
import NotFound from './components/NotFound/NotFound';

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
