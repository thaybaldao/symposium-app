import React, { Component } from 'react';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import Select from "react-validation/build/select";
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

class Register extends Component {
  constructor(props) {
      super(props);
      this.state = { email: '', password:'', confirm_password:'', message: ''};
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }

  async componentDidMount(){
    var response = await fetch("http://localhost:4000/sendToken", {
        credentials: 'same-origin',
        method: "GET"
    });
    var auxiliar = await response.json()
    this.setState({token: auxiliar.csrfToken})
  }

  mySubmitHandler = async e => {
    this.form.validateAll();
    e.preventDefault();
    try {
      const body = this.state;

      var token = document.querySelector('meta[name="csrf-token"]').getAttribute('content')

      if ((this.state.email && validator.isEmail(this.state.email)) && this.state.password && this.state.confirm_password) {
        const response = await fetch("http://localhost:4000/register", {
        method: "POST",
        credentials: 'same-origin',
        headers: { "Content-Type": "application/json", 'XSRF-TOKEN': this.state.token },
        body: JSON.stringify(body)
      });
        var res = await response.json();
        if (res.error) {
          this.setState({
            message: res.message,
          });
        }
        else
          window.location = "/";
      }


    } catch (err) {
      console.error(err.message);
    }
  };

  render() {
    return (
      <section id="inscricao">
        <div>
           <div className="inside-modal">
              <meta name="csrf-token" content={this.state.token}/>
              <Form onSubmit={this.mySubmitHandler} ref={c => { this.form = c; }}>

                <p class="modal-field">E-mail:</p>
                <Input type="text" className="form-control" name='email' value={this.state.email} onChange={this.myChangeHandler} validations={[required, email]}/>

                <p class="modal-field">Senha:</p>
                <Input type="password" className="form-control" name='password' value={this.state.password} onChange={this.myChangeHandler} validations={[required]}/>

                <p class="modal-field">Confirme a senha:</p>
                <Input type="password" className="form-control" name='confirm_password' value={this.state.confirm_password} onChange={this.myChangeHandler} validations={[required]}/>

                <Input type='submit' className="button btn register-btn" value='CADASTRAR'/>

                {this.state.message && (
                <div className="form-group">
                  <div className="alert alert-danger" role="alert" style={{maxWidth:"95%"}}>
                    {this.state.message}
                  </div>
                </div>
              )}
              </Form>
           </div>
        </div>
      </section>
    );
  }
}

export default Register;
