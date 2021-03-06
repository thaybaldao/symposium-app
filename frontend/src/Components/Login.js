import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import AuthService from "../Services/AuthService.js";
import validator from "validator";

const email = (value) => {
  if (!validator.isEmail(value)) {
    return (
      <div className="alert alert-warning" role="alert" style={{maxWidth:"95%"}}>
        {`${value} não é um email válido.`}
      </div>
    );
  }
};


const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert" style={{maxWidth:"95%"}}>
        Este campo é obrigatório!
      </div>
    );
  }
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.isLoggedIn = props.isLoggedIn;
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      email: "",
      password: "",
      loading: false,
      message: ""
    };
  }

  async componentDidMount(){
    var response = await fetch("http://localhost:4000/sendToken", {
        credentials: 'same-origin',
        method: "GET"
    });
    var auxiliar = await response.json()
    this.setState({token: auxiliar.csrfToken})
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.login(this.state.email, this.state.password).then(
        () => {
          window.location.reload();
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            message: resMessage
          });
        }
      );
    } else {
      this.setState({
        loading: false
      });
    }
  }



  render() {
    return (
      <div className="col-md-12">
        <div className="inside-modal">
          <Form
            onSubmit={this.handleLogin}
            ref={c => {
              this.form = c;
            }}
          >
              <meta name="csrf-token" content={this.state.token}/>

              <label class="modal-field" htmlFor="email">E-mail:</label>
              <Input
                type="text"
                className="form-control"
                name="email"
                value={this.state.email}
                onChange={this.onChangeEmail}
                validations={[required,email]}
              />



              <label class="modal-field" htmlFor="password">Senha:</label>
              <Input
                type="password"
                className="form-control"
                name="password"
                value={this.state.password}
                onChange={this.onChangePassword}
                validations={[required]}
              />



              <button
                className="button btn register-btn"
                disabled={this.state.loading}
              >
                {this.state.loading && (
                  <span className="spinner-border spinner-border-sm" style={{marginRight: "5px", marginBottom: "3px"}}></span>
                )}
                <span>LOGIN</span>
              </button>


            {this.state.message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert" style={{maxWidth:"95%"}}>
                  {this.state.message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />
          </Form>
        </div>
      </div>
    );
  }
}

export default Login;
