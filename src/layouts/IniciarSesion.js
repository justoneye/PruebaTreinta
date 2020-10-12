import React, { Component } from "react";
import ReactDOM from 'react-dom'


class IniciarSesion extends Component {
  render() {
    return( 
      <div class="limiter">
        <div class="container-login100">
          <div class="login100-more" style="background-image: url('images/bg-01.jpg');"></div>
            <div class="wrap-login100 p-l-50 p-r-50 p-t-72 p-b-50">
              <form class="login100-form validate-form">
                <span class="login100-form-title p-b-59">
                  Registro
                </span>

                <div class="wrap-input100 validate-input" data-validate="Este campo es OBLIGATORIO">
                <span class="label-input100">Nombre Completo</span>
                    <input class="input100" type="text" name="name" placeholder="Nombre"/>
                <span class="focus-input100"></span>
                </div>

                <div class="wrap-input100 validate-input" data-validate = "Este campo es OBLIGATORIO">
                <span class="label-input100">Email</span>
                    <input class="input100" type="text" name="email" placeholder="Email"/>
                <span class="focus-input100"></span>
                </div>

                <div class="wrap-input100 validate-input" data-validate = "Este campo es OBLIGATORIO">
                <span class="label-input100">Contraseña</span>
                    <input class="input100" type="text" name="pass" placeholder="*************"/>
                <span class="focus-input100"></span>
                </div>

                <div class="wrap-input100 validate-input" data-validate = "Este campo es OBLIGATORIO">
                <span class="label-input100">Repeat Password</span>
                    <input class="input100" type="text" name="repeat-pass" placeholder="*************"/>
                <span class="focus-input100"></span>
                </div>

                <div class="flex-m w-full p-b-33">
                <div class="contact100-form-checkbox">
                    <input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me"/>
                    <label class="label-checkbox100" for="ckb1">
                        <span class="txt1"> 
                    Estoy de acuerdo con los <a href="#" class="txt2 hov1">Términos y Políticas de Uso</a>
                    </span>
                    </label>
                </div>

            <div class="container-login100-form-btn">
                <div class="wrap-login100-form-btn">
                <div class="login100-form-bgbtn">

                </div>
                    <button class="login100-form-btn">
                    Sign Up
                    </button>
                </div>

                <a href="#" class="dis-block txt3 hov1 p-r-30 p-t-10 p-b-10 p-l-30">
                    Sign in
                    <i class="fa fa-long-arrow-right m-l-5"></i>
                </a>
			</div>
          </div>
		</form>
		</div>
	</div>
    </div>
    );
  }
};

export default IniciarSesion;