'use strict';

import CashApp from "./CashApp";
import React from "react";
import Router from "react-router";

var Route = Router.Route;

var content = document.getElementById('content');

var Routes = (
  <Route handler={CashApp}>
    <Route name="/" handler={CashApp}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
