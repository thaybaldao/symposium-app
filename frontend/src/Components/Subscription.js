import React, { Component } from 'react';
import SubscribeListener from './SubscribeListener';
import SubscribePresenter from './SubscribePresenter';

import AuthService from "../Services/AuthService.js";

class Subscription extends Component {
  constructor(props) {
    super(props);
    this.subscribed = props.subscribed;
    console.log(this.subscribed)
    this.logOut = this.logOut.bind(this);
  }

  logOut() {
    AuthService.logout();
    window.location = "/";
  }

  render() {
    return (
      <div>
        {this.subscribed ?
          (
            <section id="inscricao" className="section lightRed">
              <div className="row">
                <h2>Inscrição</h2>
              </div>
              <div className="row">
                <p> Ótimo! Você já está inscrito no Simpósio Brasileiro de Mulheres em STEM2D!</p>
              </div>
              <div style={{color: "#000000", textAlign: "center"}}>
                <button type="button" class="button btn register-btn" onClick={this.logOut}>SAIR</button>
              </div>
            </section>
          ) : (
            <section id="inscricao" className="section lightRed">
              <div className="row">
                <h2>Inscrição</h2>
              </div>
              <div className="row">
                <p> Falta muito pouco para você se inscrever no Simpósio Mulheres em STEM!</p>
              </div>
              <div style={{color: "#000000", textAlign: "center"}}>
                <button type="button" class="button btn register-btn" onClick={this.logOut}>SAIR</button>
                <button type="button" class="button btn register-btn" data-toggle="modal" data-target="#subscribeListenerModal">INSCRIÇÃO OUVINTE</button>

                <div class="modal fade" id="subscribeListenerModal" tabindex="-1" role="dialog" aria-labelledby="subscribeListenerModalLabel" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                    <div class="newmodal">
                      <div class="modal-header">
                        <h5 class="modal-title" id="subscribeListenerModalLabel">INSCRIÇÃO OUVINTE</h5>
                        <button type="button" style={{fontSize: "20px"}} class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <SubscribeListener/>
                      </div>
                    </div>
                  </div>
                </div>

                <button type="button" class="button btn register-btn" data-toggle="modal" data-target="#subscribePresenterModal">INSCRIÇÃO APRESENTADOR</button>

                <div class="modal fade" id="subscribePresenterModal" tabindex="-1" role="dialog" aria-labelledby="subscribePresenterModalLabel" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                    <div class="newmodal">
                      <div class="modal-header">
                        <h5 class="modal-title" id="subscribePresenterModalLabel">INSCRIÇÃO APRESENTADOR</h5>
                        <button type="button" style={{fontSize: "20px"}} class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body" style={{left: "11px"}}>
                        <SubscribePresenter/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
        )}
      </div>
    );
  }
}

export default Subscription;
