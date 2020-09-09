import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Login } from "../pages/Login";
import { Store } from "../pages/Store";
import { ContextProvider } from "../Context";

export const App = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/store" component={Store} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </ContextProvider>
  );
};
