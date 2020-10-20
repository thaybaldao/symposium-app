import React, { Component } from 'react';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import Select from "react-validation/build/select";
import validator from "validator";

const email = (value) => {
  if (!validator.isEmail(value)) {
    return `${value} não é um email válido.`
  }
};

const number = (value) => {
  if (!validator.isNumeric(value)) {
    return `${value} não é uma sequência de números.`
  }
};

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        Este campo é obrigatório!
      </div>
    );
  }
};

class Register extends Component {
  constructor(props) {
      super(props);
      this.state = { name: '', email: '', password:'',
                    rg: '', cpf: '', tel: '', birth: '', nivel: '',
                    job: '', place: ''
                   };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    this.form.validateAll();
    console.log(this.state);
  }

  render() {
    return (
      <section id="inscricao" className="section lightRed">
        <div className="row">
           <div className="nine columns main-col">
              <h2>Register</h2>


              <Form onSubmit={this.mySubmitHandler} ref={c => { this.form = c; }}>
                <p>Nome:</p>
                <Input type="text" name='name' value={this.state.name} onChange={this.myChangeHandler} validations={[required]}/>

                <p>E-mail:</p>
                <Input type="text" name='email' value={this.state.email} onChange={this.myChangeHandler} validations={[required, email]}/>

                <p>Senha:</p>
                <Input type="password" name='password' value={this.state.password} onChange={this.myChangeHandler} validations={[required]}/>

                <p>RG:</p>
                <Input type="text"  name='rg' value={this.state.rg} onChange={this.myChangeHandler} validations={[required, number]}/>

                <p>CPF:</p>
                <Input type="text" name='cpf' value={this.state.cpf} onChange={this.myChangeHandler} validations={[required]}/>

                <p>Telefone:</p>
                <Input type="text" name='tel' value={this.state.tel} onChange={this.myChangeHandler} validations={[required]}/>

                <p>Data de Nascimento:</p>
                <Input type="date" name='birth' value={this.state.birth} onChange={this.myChangeHandler} validations={[required]}/>

                <p>Nível de Escolaridade:</p>
                <Select name="nivel" value={this.state.nivel} onChange={this.myChangeHandler} validations={[required]}>
                  <option value="fundamental">Ensino Fundamental</option>
                  <option value="medio">Ensino Médio</option>
                  <option value="superior">Ensino Superior</option>
                  <option value="posgraduacao">Pós-Graduação</option>
                </Select>

                <p>Profissão:</p>
                <Input type="text" name='job' value={this.state.job} onChange={this.myChangeHandler} validations={[required]}/>

                <p>Organização:</p>
                <Input type="text" name='place' value={this.state.place} onChange={this.myChangeHandler} validations={[required]}/>

                <Input type='submit' value='Inscrever'/>
              </Form>
           </div>
        </div>
      </section>
    );
  }
}

export default Register;
