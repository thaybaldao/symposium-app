import React, { Component } from 'react';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import Select from "react-validation/build/select";
import AuthService from "../Services/AuthService.js";
import validator from "validator";

const number = (value) => {
  if (!validator.isNumeric(value)) {
    return (
      <div className="alert alert-warning" role="alert" style={{maxWidth:"95%"}}>
        {`${value} não é uma sequência de números.`}
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

class SubscribeListener extends Component {
  constructor(props) {
      super(props);
      this.state = { name: '', rg: '', cpf: '', tel: '',
                     birth: '', nivel: '', job: '', place: '', message: ''};
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
      body.user_id = AuthService.getCurrentUser().user_id;
      //var body = {user_id: AuthService.getCurrentUser().user_id, this.state};

      var token = document.querySelector('meta[name="csrf-token"]').getAttribute('content')

      if (validator.isNumeric(this.state.rg)){
          const response = await fetch("http://localhost:4000/subscribe/listener", {
          method: "POST",
          headers: { "Content-Type": "application/json", 'CSRF-Token': token },
          body: JSON.stringify(body)
        });

        try {
          var res = await response.json();
          if (res.error) {
            this.setState({
              message: res.message,
            });
          }
          
        } catch (error) {
          AuthService.setIsSubscribed();

          window.location = "/";
          
        }

        
      }


    } catch (err) {
      console.error(err.message);
    }
  };

  render() {
    return (
      <section id="inscricao">
        <div>
        <meta name="csrf-token" content=""/>
        <input type="hidden" name="_csrf" value=""/>
           <div className="inside-modal">
              <Form onSubmit={this.mySubmitHandler} ref={c => { this.form = c; }}>
              <p class="modal-field">Nome Completo:</p>
              <Input type="text" className="form-control" name='name' value={this.state.name} onChange={this.myChangeHandler} validations={[required]}/>

              <p class="modal-field">RG:</p>
              <Input type="text" className="form-control"  name='rg' value={this.state.rg} onChange={this.myChangeHandler} validations={[required, number]}/>

              <p class="modal-field">CPF:</p>
              <Input type="text" className="form-control" name='cpf' value={this.state.cpf} onChange={this.myChangeHandler} validations={[required]}/>

              <p class="modal-field">Telefone:</p>
              <Input type="text" className="form-control" name='tel' value={this.state.tel} onChange={this.myChangeHandler} validations={[required]}/>

              <p class="modal-field">Data de Nascimento:</p>
              <Input type="date" className="form-control form-control-lg" style={{maxWidth:"95%", left:"11px", marginBottom: "24px"}} name='birth' value={this.state.birth} onChange={this.myChangeHandler} validations={[required]}/>

              <p class="modal-field" style={{marginTop: "20px"}}>Nível de Escolaridade:</p>
              <Select name="nivel" className="form-control form-control-lg" value={this.state.nivel} onChange={this.myChangeHandler} validations={[required]}>
                <option value="fundamental">Ensino Fundamental</option>
                <option value="medio">Ensino Médio</option>
                <option value="superior">Ensino Superior</option>
                <option value="posgraduacao">Pós-Graduação</option>
              </Select>

              <p class="modal-field">Profissão:</p>
              <Input type="text" className="form-control" name='job' value={this.state.job} onChange={this.myChangeHandler} validations={[required]}/>

              <p class="modal-field">Organização:</p>
              <Input type="text" className="form-control" name='place' value={this.state.place} onChange={this.myChangeHandler} validations={[required]}/>

              <Input type='submit' className="button btn register-btn" value='INSCREVER'/>

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

export default SubscribeListener;
