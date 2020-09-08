import React, { Fragment } from "react";
import { Layout } from "./components/Layout";
import { Login } from "./pages/Login";

export const App = () => {
  return (
    <Fragment>
      <Layout>
        <Login />
      </Layout>
    </Fragment>
  );
};
