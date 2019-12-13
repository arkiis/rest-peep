import React, { useEffect, useState } from "react";
import Layout from "./layout/layout";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/home/home";

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Redirect to="/" />
      </Switch>
    </Layout>
  );
}

export default App;
