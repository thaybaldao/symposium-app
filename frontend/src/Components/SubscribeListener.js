import React, { Component } from 'react';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import Select from "react-validation/build/select";
import validator from "validator";

import AuthService from "../Services/AuthService.js";

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert" style={{maxWidth:"95%"}}>
        Este campo é obrigatório!
      </div>
    );
  }
};

class SubscribeListener extends Component {
  constructor(props) {
      super(props);
  }

  mySubmitHandler = async e => {
    this.form.validateAll();
    e.preventDefault();
    try {
      var body = {user_id: AuthService.getCurrentUser().user_id};

      const response = await fetch("http://localhost:4000/subscribe/listener", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      AuthService.setIsSubscribed();

      window.location = "/";
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
                <p>Confirme sua inscrição no Simpósio como OUVINTE clicando no botão abaixo.</p>

                <Input type='submit' className="button" value='Inscrever'/>
              </Form>
           </div>
        </div>
      </section>
    );
  }
}

export default SubscribeListener;
