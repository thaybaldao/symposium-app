import React, { Component } from 'react';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
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

class Contact extends Component {
  constructor(props) {
      super(props);
      this.state = { name: '', email: '', message: '', errMessage: ''};
  }

  async componentDidMount(){
    var response = await fetch("http://localhost:4000/sendToken", {
        credentials: 'same-origin',
        method: "GET"
    });
    var auxiliar = await response.json()
    this.setState({token: auxiliar.csrfToken})
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

      var token = document.querySelector('meta[name="csrf-token"]').getAttribute('content')

      if (validator.isEmail(this.state.email)){

      const response = await fetch("http://localhost:4000/contact", {
        method: "POST",
        credentials: 'same-origin',
        headers: { "Content-Type": "application/json", 'XSRF-TOKEN': this.state.token },
        body: JSON.stringify(body)
      });

      try {
        var res = await response.json();
        if (res.error) {
          this.setState({
            errMessage: res.message,
          });
        }

      } catch (error) {
        window.location.reload(false);

      }

    }

      
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
          <meta name="csrf-token" content={this.state.token}/>
          <Form onSubmit={this.mySubmitHandler} ref={c => { this.form = c; }}>
            <p class="modal-field">Nome Completo:</p>
            <Input type="text" className="form-control" name='name' value={this.state.name} onChange={this.myChangeHandler} validations={[required]}/>

            <p class="modal-field">E-mail:</p>
            <Input type="text" className="form-control" name='email' value={this.state.email} onChange={this.myChangeHandler} validations={[required, email]}/>

            <p class="modal-field">Mensagem:</p>
            <textarea type="text" className="form-control" name='message' value={this.state.message} onChange={this.myChangeHandler} validations={[required]}/>

            <Input type='submit' className="button btn register-btn button-contact" value='ENVIAR'/>
            {this.state.errMessage && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert" style={{maxWidth:"95%"}}>
                  {this.state.errMessage}
                </div>
              </div>
            )}
          </Form>
       </div>
      </section>
    );
  }
}

export default Contact;
