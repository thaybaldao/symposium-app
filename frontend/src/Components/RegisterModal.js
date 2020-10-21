import React, { Component } from 'react';
import Register from './Register';
import Login from './Login';

import AuthService from "../Services/AuthService.js";

class RegisterModal extends Component {
  constructor(props) {
    super(props);
    this.isLoggedIn = props.isLoggedIn;
    this.logOut = this.logOut.bind(this);
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    return (
      <div>
      {this.isLoggedIn ?
       (
        <section id="inscricao" className="section lightRed" style={{color: "#000000", textAlign: "center"}}>
          <button type="button" className="button" data-toggle="modal" data-target="#registerModal">
          Register
          </button>

          <div class="modal fade" id="registerModal" tabindex="-1" role="dialog" aria-labelledby="registerModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="newmodal">
              <div class="modal-header">
                <h5 class="modal-title" id="registerModalLabel">Register</h5>
                <button type="button" style={{fontSize: "20px"}} class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <Register/>
              </div>
            </div>
          </div>
          </div>

          <button type="button" className="button" data-toggle="modal" data-target="#loginModal">
          Login
          </button>

          <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="newmodal">
              <div class="modal-header">
                <h5 class="modal-title" id="loginModalLabel">Login</h5>
                <button type="button" style={{fontSize: "20px"}} class="close" data-dismiss="modal" aria-label="Close">
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
        <a href="/login" onClick={this.logOut}>
                LogOut
         </a>
      )}
      </div>
    );
  }
}

export default RegisterModal;
