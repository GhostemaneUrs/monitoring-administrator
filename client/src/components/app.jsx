import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/index";
import Monitores from "../pages/Monitores";
import Monitorias from "../pages/Monitorias";
import NotFound from "./notFound";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/administrarMonitores">
          <Monitores />
        </Route>
        <Route path="/administrarMonitorias">
          <Monitorias />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;