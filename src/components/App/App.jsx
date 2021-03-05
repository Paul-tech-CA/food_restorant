import { Route, Switch, NavL } from "react-router-dom";
import HomePage from "../../pages/homePage/HomePage";
import SearchPage from "../../pages/SearchPage/SearchPage";
import ProductsPage from "../../pages/productsPage/ProductsPage";
import NotFound from "../../pages/notFound/NotFound";

import React from "react";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/products" component={ProductsPage} />
      <Route path="/search" component={SearchPage} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default App;
