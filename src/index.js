/*!

=========================================================
* Now UI Dashboard React - v1.4.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/now-ui-dashboard.scss?v1.4.0";
import "assets/css/demo.css";

import AdminLayout from "layouts/Admin.js";
import IniciarSesion from "layouts/IniciarSesion.js";

const hist = createBrowserHistory();

ReactDOM.render(
  <BrowserRouter>
    <Router history={hist}>
      <Switch>
        <Route path="/" render={(props) => <AdminLayout/>} />
        <Route path="/iniciarSesion" component={() => <IniciarSesion />} />
      </Switch>
    </Router>
  </BrowserRouter>,
  document.getElementById("root")
);