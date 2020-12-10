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
      this.state = { email: '', password:''};
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }

  mySubmitHandler = async e => {
    this.form.validateAll();
    e.preventDefault();
    try {
      const body = this.state;

      if ((this.state.email && validator.isEmail(this.state.email)) && this.state.password) {
        const response = await fetch("http://localhost:4000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

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

              <Form onSubmit={this.mySubmitHandler} ref={c => { this.form = c; }}>

                <p class="modal-field">E-mail:</p>
                <Input type="text" className="form-control" name='email' value={this.state.email} onChange={this.myChangeHandler} validations={[required, email]}/>

                <p class="modal-field">Senha:</p>
                <Input type="password" className="form-control" name='password' value={this.state.password} onChange={this.myChangeHandler} validations={[required]}/>

                <Input type='submit' className="button btn register-btn" value='CADASTRAR'/>
              </Form>
           </div>
        </div>
      </section>
    );
  }
}

export default Register;
