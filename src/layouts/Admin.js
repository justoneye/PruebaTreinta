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
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

// reactstrap components
import { Route, Switch, Redirect } from "react-router-dom";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import Footer from "components/Footer/Footer.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";

import routes from "routes.js";

var ps;

class Dashboard extends React.Component {
  state = {
    backgroundColor: "blue",
  };
  mainPanel = React.createRef();
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.mainPanel.current);
      document.body.classList.toggle("perfect-scrollbar-on");
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
      document.body.classList.toggle("perfect-scrollbar-on");
    }
  }
  componentDidUpdate(e) {
    if (e.history.action === "PUSH") {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      this.mainPanel.current.scrollTop = 0;
    }
  }
  handleColorClick = (color) => {
    this.setState({ backgroundColor: color });
  };
  render() {
    return (
      <div className="wrapper">
        <div className="main-panel" ref={this.mainPanel}>

        Treinta - ¡Aplicación financiera gratuita!
Gestiona las transacciones de tu negocio, conoce la utilidad de tu negocio en cualquier momento y registra y cobra deudas 3 veces más eficazmente.
Ayuda a tu negocio a crecer más con Treinta, la aplicación financiera gratuita. ¡Treinta es gratis, seguro y fácil de usar!

        La contabilidad de tu negocio en tu mano
          Registra todas las ventas y gastos
          Registra los ingresos, los gastos y las cuentas por cobrar y pagar

          Visualiza la utilidad del negocio al instante
          Obtén información diaria, semanal y mensual de la utilidad del negocio

          Cobra puntualmente la deuda de tus clientes
          Obtén pagos de las deudas de tus clientes más rápido con el registro de deudas pendientes

          
Recuerda cuando pagar a proveedores y acreedores
Visualiza las fechas de vencimiento de tus facturas y recibos

Los datos se mantienen seguros
Las cuentas por cobrar son muy importantes, no las pierda. Con Treinta, los registros se mantienen seguros.

Gratis, seguro y fácil

¡Simplifica tu negocio!
Monitorear las finanzas de tu negocio nunca ha sido tan fácil.
Con solo un smartphone y la aplicación Treinta

Registrate o Inicia sesión 
          <Switch>
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
          <Footer fluid />
        </div>
      </div>
    );
  }
}

export default Dashboard;
