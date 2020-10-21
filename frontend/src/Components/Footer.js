import React, { Component } from 'react';

class Footer extends Component {
  render() {

    if(this.props.data){
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url} target="_blank"><i className={network.className}></i></a></li>
      })
      var supporters= this.props.data.support.map(function(support){
        var path = "../Images/"+ support.image
        return <li key={support.name}><a href={support.url}><img src={require('../Images/ita.png')} alt="ita"/></a></li>
      })
    }

    return (
    <footer className="foot">
     <div className="row">
        <div className="twelve columns">
           <ul className="social-links">
              {networks}
           </ul>
           <p style={{margin: "0 0 -50px 0", position: "relative", right: "5px"}}> APOIADORES </p>
           <ul className="copyright" style={{position: "relative", right: "30px"}}>
              <li><a href={"http://www.ita.br/"} target="_blank"><img className="ita" src={require('../Images/ita.png')} alt="ita"/></a></li>
              <li><a href={"https://itaex.com.br/"} target="_blank"><img className="itaex" src={require('../Images/itaex.png')} alt="itaex"/></a></li>
              <li><a href={"https://www.jnjbrasil.com.br/"} target="_blank"><img className="johnson" src={require('../Images/jj.png')} alt="jnjbrasil"/></a></li>
           </ul>
        <p></p>
        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="fa fa-arrow-circle-up"></i></a></div>
     </div>
    </footer>
    );
  }
}

export default Footer;
