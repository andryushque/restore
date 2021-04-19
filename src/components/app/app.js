import React from "react";
import { Route, Switch } from "react-router-dom";
import { HomePage, CartPage } from "../pages";
import Header from "../header";
import ShoppingCartTable from "../shopping-cart-table";
import "./app.css";

const App = () => {
  return (
    <main className="container">
      <Header />

      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/cart" component={CartPage} />
      </Switch>

      <ShoppingCartTable />
    </main>
  );
};

export default App;
