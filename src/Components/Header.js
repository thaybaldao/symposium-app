import React, { Component } from 'react';

class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
    }

    return (
      <header id="home">
      <nav id="nav-wrap" className="navBar">
         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#sobre">Sobre</a></li>
            <li><a className="smoothscroll" href="#programacao">Programação</a></li>
            <li><a className="smoothscroll" href="#inscricao">Inscrição</a></li>
            <li><a className="smoothscroll" href="#palestrantes">Palestrantes</a></li>
            <li><a className="smoothscroll" href="#faq">FAQ</a></li>
            <li><a className="smoothscroll" href="#contato">Contato</a></li>
         </ul>
      </nav>

      <div className="row banner">

         <div className="banner-text">
            <h1 className="responsive-headline">{name}</h1>

            <hr />
            <ul className="social">
               <a href="#" className="button btn project-btn"><i className="fa fa-book"></i>Project</a>
               <a href="#" className="button btn github-btn"><i className="fa fa-github"></i>Github</a>
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
