import React, { Component } from 'react';
import Register from './Register';
import Login from './Login';
import Subscription from './Subscription';

import AuthService from "../Services/AuthService.js";

class RegisterModal extends Component {
  constructor(props) {
    super(props);
    this.loggedIn = props.loggedIn;
  }

  render() {
    return (
      <div>
      {this.loggedIn ?
       (
        <section id="inscricao" className="section lightRed">
          <div className="row">
            <h2>Inscrição</h2>
          </div>
          <div className="row">
            <p>Para se inscrever no Simpósio Brasileiro de Mulheres em STEM, efetue login nesta página. <br />
            Caso você ainda não possua uma conta, preencha o formulário de cadastro. Em seguida, efetue login nesta página.</p>
          </div>
          <div style={{color: "#000000", textAlign: "center"}}>
            <button type="button" className="button btn register-btn" data-toggle="modal" data-target="#registerModal">CADASTRO</button>

            <div class="modal fade" id="registerModal" tabindex="-1" role="dialog" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="newmodal">
                  <div class="modal-header">
                    <button type="button" style={{fontSize: "20px"}} class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body" style={{left: "11px"}}>
                    <Register/>
                  </div>
                </div>
              </div>
            </div>

            <button type="button" className="button btn register-btn" data-toggle="modal" data-target="#loginModal">LOGIN</button>

            <button type="button" className="button btn register-btn" >GOOGLE LOGIN</button>

            <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="newmodal">
                  <div class="modal-header">
                    <button type="button" style={{fontSize: "20px"}} class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body" style={{left: "11px"}}>
                    <Login/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <Subscription subscribed={AuthService.getIsSubscribed()} />
      )}
      </div>
    );
  }
}

export default RegisterModal;
