import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Login } from "../pages/Login";
import { StorePage } from "../pages/StorePage";
import { ContextProvider } from "../Context";

export const App = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/store" component={StorePage} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </ContextProvider>
  );
};
