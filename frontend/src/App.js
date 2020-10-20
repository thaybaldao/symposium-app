import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Faq from './Components/Faq';
import Header from './Components/Header';
import Register from './Components/Register';
import Schedule from './Components/Schedule';
import Speakers from './Components/Speakers';
import ShowMap from './Components/Map';
import Footer from './Components/Footer';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      data: {}
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
    return (
      <div className="App">
        <Header />
        <About />
        <Speakers />
        <Schedule />
        <Faq />
        <Register />
        <Contact data={this.state.data.main}/>
        <ShowMap />
        <Footer data={this.state.data.main}/>
      </div>
    );
  }
}

export default App;
