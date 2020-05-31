import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import ProductsContainer from './components/Products/ProductsContainer';
import NotFound from './components/NotFound/NotFound';

export function getRoutes() {
  return (
    <BrowserRouter>
      <Main>
        <Switch>
          <Route exact path="/" component={ProductsContainer} />
          <Route path="/add" component={ProductsContainer} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Main>
    </BrowserRouter>
  );
}

export default getRoutes;
