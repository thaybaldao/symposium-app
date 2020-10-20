import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';

import AuthService from "./Services/AuthService"

import About from './Components/About';
import Contact from './Components/Contact';
import FAQSession from './Components/Faq';
import Header from './Components/Header';
import Register from './Components/Register';
import Schedule from './Components/Schedule';
import Speakers from './Components/Speakers';
import ShowMap from './Components/Map';
import Footer from './Components/Footer';
import Login from './Components/Login';

class App extends Component {

  constructor(props){
    super(props);

    this.logOut = this.logOut.bind(this);

    this.state = {
      foo: 'bar',
      data: {},
      currentUser: null,
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getData(){
    $.ajax({
      url:'./data.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getData();
  }

  logOut() {
    AuthService.logout();
  }

  render() {

    const { currentUser } = this.state;

    return (
      <div className="App">
        <Header />
        <About />
        <Speakers />
        <Schedule />
        <FAQSession />
        <Register />
        <Contact data={this.state.data.main}/>
        <ShowMap />
        <Login isLoggedIn={AuthService.getCurrentUser() === null} />

        <Footer data={this.state.data.main}/>
      </div>
    );
  }
}

export default App;
