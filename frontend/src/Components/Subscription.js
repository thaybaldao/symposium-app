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
            <section id="inscricao" className="section lightRed" style={{color: "#000000", textAlign: "center"}}>
              <button type="button" class="button" onClick={this.logOut}>Logout</button>
              <p> Ótimo! Você já está escrito no Simpósio Brasileiro de Mulheres em STEM2D! </p>
            </section>
          ) : (
            <section id="inscricao" className="section lightRed" style={{color: "#000000", textAlign: "center"}}>
              <button type="button" class="button" onClick={this.logOut}>Logout</button>
              <button type="button" class="button" data-toggle="modal" data-target="#subscribeListenerModal">Inscrição Ouvinte</button>

              <div class="modal fade" id="subscribeListenerModal" tabindex="-1" role="dialog" aria-labelledby="subscribeListenerModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="newmodal">
                    <div class="modal-header">
                      <h5 class="modal-title" id="subscribeListenerModalLabel">Inscrição Ouvinte</h5>
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

              <button type="button" class="button" data-toggle="modal" data-target="#subscribePresenterModal">Inscrição Apresentador</button>

              <div class="modal fade" id="subscribePresenterModal" tabindex="-1" role="dialog" aria-labelledby="subscribePresenterModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="newmodal">
                    <div class="modal-header">
                      <h5 class="modal-title" id="subscribePresenterModalLabel">Inscrição Apresentador</h5>
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
            </section>
        )}
      </div>
    );
  }
}

export default Subscription;
