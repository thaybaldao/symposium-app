import React, { Component } from 'react';
import Register from './Register';
import Login from './Login';
import SubscribeListener from './SubscribeListener';
import SubscribePresenter from './SubscribePresenter';

import AuthService from "../Services/AuthService.js";

class RegisterModal extends Component {
  constructor(props) {
    super(props);
    this.isLoggedIn = props.isLoggedIn;
    this.logOut = this.logOut.bind(this);
  }

  logOut() {
    AuthService.logout();
    window.location = "/";
  }

  render() {
    return (
      <div>
      {this.isLoggedIn ?
       (
        <section id="inscricao" className="section lightRed" style={{color: "#000000"}}>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#registerModal">
          Register
          </button>

          <div class="modal fade" id="registerModal" tabindex="-1" role="dialog" aria-labelledby="registerModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="registerModalLabel">Register</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <Register/>
              </div>
            </div>
          </div>
          </div>

          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#loginModal">
          Login
          </button>

          <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="loginModalLabel">Login</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <Login/>
              </div>
            </div>
          </div>
          </div>
        </section>
      ) : (
        <section id="inscricao" className="section lightRed" style={{color: "#000000"}}>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#loginModal" onClick={this.logOut}>
        Logout
        </button>

        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#subscribeListenerModal">
        Inscrição Ouvinte
        </button>

        <div class="modal fade" id="subscribeListenerModal" tabindex="-1" role="dialog" aria-labelledby="subscribeListenerModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="subscribeListenerModalLabel">Inscrição Ouvinte</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <SubscribeListener/>
            </div>
          </div>
        </div>
        </div>

        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#subscribePresenterModal">
        Inscrição Apresentador
        </button>

        <div class="modal fade" id="subscribePresenterModal" tabindex="-1" role="dialog" aria-labelledby="subscribePresenterModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="subscribePresenterModalLabel">Inscrição Apresentador</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
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

export default RegisterModal;
