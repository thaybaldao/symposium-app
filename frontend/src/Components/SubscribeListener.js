import React, { Component } from 'react';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";

import AuthService from "../Services/AuthService.js";

class SubscribeListener extends Component {
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
                <p>Confirme sua inscrição no SMSTEM como OUVINTE.</p>

                <Input type='submit' className="button btn register-btn" value='INSCREVER'/>
              </Form>
           </div>
        </div>
      </section>
    );
  }
}

export default SubscribeListener;
