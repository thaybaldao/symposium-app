import React, { Component } from 'react';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import Select from "react-validation/build/select";
import validator from "validator";

import AuthService from "../Services/AuthService.js";

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
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

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  render() {
    return (
      <section id="inscricao">
        <div className="row">
           <div className="nine columns main-col">
              <Form onSubmit={this.mySubmitHandler} ref={c => { this.form = c; }}>
                <p>Confirme sua inscrição no Simpósio como OUVIENTE clicando no botão abaixo.</p>

                <Input type='submit' value='Inscrever'/>
              </Form>
           </div>
        </div>
      </section>
    );
  }
}

export default SubscribeListener;
