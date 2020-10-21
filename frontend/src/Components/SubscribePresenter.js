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

class SubscribePresenter extends Component {
  constructor(props) {
      super(props);
      this.state = { title: '', authors: '', abstract: '', user_id: AuthService.getCurrentUser().id};
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
      var id = {user_id: AuthService.getCurrentUser().user_id};
      var body = Object.assign({}, this.state, id);
      console.log(body);
      const response = await fetch("http://localhost:4000/subscribe/presenter", {
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
                <p>Título:</p>
                <Input type="text" name='title' value={this.state.title} onChange={this.myChangeHandler} validations={[required]}/>

                <p>Autores:</p>
                <Input type="text" name='authors' value={this.state.authors} onChange={this.myChangeHandler} validations={[required]}/>

                <p>Resumo:</p>
                <textarea type="text" name='abstract' value={this.state.abstract} onChange={this.myChangeHandler} validations={[required]}/>

                <Input type='submit' value='Inscrever'/>
              </Form>
           </div>
        </div>
      </section>
    );
  }
}

export default SubscribePresenter;
