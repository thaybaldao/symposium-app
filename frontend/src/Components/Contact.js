import React, { Component } from 'react';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import validator from "validator";

const email = (value) => {
  if (!validator.isEmail(value)) {
    return (
      <div className="alert alert-warning" role="alert">
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

class Contact extends Component {
  constructor(props) {
      super(props);
      this.state = { name: '', email: '', message: ''};
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

      const response = await fetch("http://localhost:4000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      window.location.reload(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  render() {
    return (
      <section id="contato" className="section white">
        <div className="row">
          <h2>Contato</h2>
        </div>
        <div className="row">
          <p>Tem alguma dúvida? Envie-nos uma mensagem!</p>
        </div>
       <div className="centered-form">
          <Form onSubmit={this.mySubmitHandler} ref={c => { this.form = c; }}>
            <p class="modal-field">Nome Completo:</p>
            <Input type="text" className="form-control" name='name' value={this.state.name} onChange={this.myChangeHandler} validations={[required]}/>

            <p class="modal-field">E-mail:</p>
            <Input type="text" className="form-control" name='email' value={this.state.email} onChange={this.myChangeHandler} validations={[required, email]}/>

            <p class="modal-field">Mensagem:</p>
            <textarea type="text" className="form-control" name='message' value={this.state.message} onChange={this.myChangeHandler} validations={[required]}/>

            <Input type='submit' className="button btn register-btn button-contact" value='ENVIAR'/>
          </Form>
       </div>
      </section>
    );
  }
}

export default Contact;
