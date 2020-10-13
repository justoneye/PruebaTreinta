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

// reactstrap components
import Footer from "components/Footer/Footer.js";
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import IniciarSesion from "layouts/IniciarSesion.js";
import ModalTest from "layouts/ModalTest.js" 
import Maps from "layouts/Maps.js" 

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

class Dashboard extends React.Component {
  render() {
    return (
        <div className="main-panel" ref={this.mainPanel}>
        <div>
          <h1>Treinta - ¡Aplicación financiera gratuita!</h1>
          <h6>Gestiona las transacciones de tu negocio, conoce la utilidad de tu negocio en cualquier momento y registra y cobra deudas 3 veces más eficazmente.</h6>
          <h6>Ayuda a tu negocio a crecer más con Treinta, la aplicación financiera gratuita. ¡Treinta es gratis, seguro y fácil de usar!</h6>
        </div>
        <div>
        <h4>La contabilidad de tu negocio en tu mano</h4>
        <Card style={{width: '33%'}}>
          <CardImg top src="img-src" alt="..."/>
            <CardBody>
              <CardTitle>Registra todas las ventas y gastos</CardTitle>
              <CardText>Registra los ingresos, los gastos y las cuentas por cobrar y pagar</CardText>
          </CardBody>
        </Card>

        <Card style={{width: '33%'}}>
          <CardImg top src="img-src" alt="..."/>
            <CardBody>
              <CardTitle>Visualiza la utilidad del negocio al instante</CardTitle>
              <CardText>Obtén información diaria, semanal y mensual de la utilidad del negocio</CardText>
          </CardBody>
        </Card>

        <Card style={{width: '33%'}}>
          <CardImg top src="img-src" alt="..."/>
            <CardBody>
              <CardTitle>Cobra puntualmente la deuda de tus clientes</CardTitle>
              <CardText>Obtén pagos de las deudas de tus clientes más rápido con el registro de deudas pendientes</CardText>
          </CardBody>
        </Card>

        <Card style={{width: '33%'}}>
          <CardImg top src="img-src" alt="..."/>
            <CardBody>
              <CardTitle>Recuerda cuando pagar a proveedores y acreedores</CardTitle>
              <CardText>Visualiza las fechas de vencimiento de tus facturas y recibos</CardText>
          </CardBody>
        </Card>    
        
        <Card style={{width: '33%'}}>
          <CardImg top src="img-src" alt="..."/>
            <CardBody>
              <CardTitle>Los datos se mantienen seguros</CardTitle>
              <CardText>Las cuentas por cobrar son muy importantes, no las pierda. Con Treinta, los registros se mantienen seguros.</CardText>
          </CardBody>
        </Card>
        </div>
        <div>
          Gracias Bogotá por darnos tan cálida bienvenida, aquí puedes encontrarnos 
          <br/>
          <Maps/>
        </div>  

        <div>
          <h4>Gratis, seguro y fácil</h4>
       
          ¡Simplifica tu negocio!
          <br/>
          Monitorear las finanzas de tu negocio nunca ha sido tan fácil.
          <br/>
          Con solo un smartphone y la aplicación Treinta
          <br/>
          <Button>Registrate</Button>
          <a class="btn btn-primary" href={ModalTest} role="button">Inicia sesión</a>
          <br/>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target={ModalTest}>
            Launch demo modal
          </button>
          ¿Ya tienes una cuenta? 
        </div>
          <Footer fluid />
        </div>
    );
  }
}

export default Dashboard;
