import React, { Component, useEffect } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';

import AuthService from "./Services/AuthService"
import axios from 'axios';

import Countdown from './Components/Countdown.js';
import About from './Components/About';
import Contact from './Components/Contact';
import FAQSession from './Components/Faq';
import Header from './Components/Header';
import RegisterModal from './Components/RegisterModal';
import Schedule from './Components/Schedule';
import Speakers from './Components/Speakers';
import ShowMap from './Components/Map';
import Footer from './Components/Footer';

class App extends Component {

  constructor(props){
    super(props);

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

  render() {

    const { currentUser } = this.state;

    return (
      <div className="App">
        <Header />
        <Countdown timeTillDate="12 30 2020, 8:00 am" timeFormat="MM DD YYYY, h:mm a" />
        <About />
        <Speakers />
        <Schedule />
        <FAQSession />
        <RegisterModal isLoggedIn={AuthService.getCurrentUser() === null} />
        <ShowMap />
        <Footer data={this.state.data.main}/>
      </div>
    );
  }
}

export default App;
