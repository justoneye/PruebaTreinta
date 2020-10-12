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
/*eslint-disable*/
import React from "react";
import { Container } from "reactstrap";
// used for making the prop types of this component
import PropTypes from "prop-types";

class Footer extends React.Component {
  render() {
    return (
      <footer
        className={"footer" + (this.props.default ? " footer-default" : "")}
      >
        <Container fluid={this.props.fluid ? true : false}>
          <nav>
            <ul>
              <li>
                <a
                  href="https://www.treinta.co/"
                  target="_blank"
                >
                  Treinta
                </a>
              </li>
              <li>
                <a
                  href="https://presentation.creative-tim.com?ref=nudr-footer"
                  target="_blank"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="https://blog.creative-tim.com?ref=nudr-footer"
                  target="_blank"
                >
                  Blog
                </a>
              </li>
            </ul>
          </nav>
          <div className="copyright">
            &copy; {1900 + new Date().getYear()}, Hecho por{" "}
            <a
              href="https://www.linkedin.com/in/pilarcamargo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pilar Camargo Márquez
            </a>
            . 
            <br/>Plantilla "Now UI Dashboard React" por {" "}
            <a
              href="https://www.creative-tim.com/product/now-ui-dashboard-react"
              target="_blank"
              rel="noopener noreferrer"
            >
              Creative Tim
            </a>
            .
          </div>
        </Container>
      </footer>
    );
  }
}

Footer.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool,
};

export default Footer;
