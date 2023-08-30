import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './components/Main/Main.jsx';
import ProductsContainer from './components/Products/ProductsContainer.jsx';
import AddProduct from './components/Products/AddProduct.jsx';
import NotFound from './components/NotFound/NotFound.jsx';

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
