import React, { useContext } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Login } from "../pages/Login";
import { StorePage } from "../pages/StorePage";
import { StoreDetail } from "../pages/StoreDetail";
import Context from "../Context";

export const PrivateRouteStorePage = ({ component: Component, authed }) => {
  return (
    <Route
      render={(props) =>
        authed === "authenticated" ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/" }} />
        )
      }
    />
  );
};

export const PrivateRouteStoreDetail = ({ component: Component, authed }) => {
  return (
    <Route
      render={(props) =>
        authed === "authenticated" ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/" }} />
        )
      }
    />
  );
};

export const App = () => {
  const { isAuth } = useContext(Context);

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRouteStorePage
            authed={isAuth}
            path="/store"
            component={StorePage}
          />

          <PrivateRouteStoreDetail
            exact
            authed={isAuth}
            path="/detail/:id"
            component={StoreDetail}
          />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};
