import React, { Component } from 'react';

class Speakers extends Component {
  render() {
    return (
      <section id="palestrantes" className="section lightPink">
        <div className="row">
           <div className="nine columns main-col">
              <h2>Palestrantes</h2>
           </div>
        </div>
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-md-6 col-lg-4">
           
            <div class="team-item">
              <div class="team-img">
                <img class="img-fluid" src={require('../Images/Palestrantes/adriana.jpg')} alt=""/>
                
              </div>
              <div class="info-text">
                <h3>Adriana Tonini</h3>
                <p>Diretora no CNPq</p>
              </div>
            </div>
            
          </div>

          <div class="col-sm-6 col-md-6 col-lg-4">
           
            <div class="team-item">
              <div class="team-img">
                <img class="img-fluid" src={require('../Images/Palestrantes/betina-roxo1.png')} alt=""/>
                
              </div>
              <div class="info-text">
                <h3>BETINA ROXO</h3>
                <p>Sócia na XP Investimentos</p>
              </div>
            </div>
            
          </div>

          <div class="col-sm-6 col-md-6 col-lg-4">
           
            <div class="team-item">
              <div class="team-img">
                <img class="img-fluid" src={require('../Images/Palestrantes/lara.jpg')} alt=""/>
                
              </div>
              <div class="info-text">
                <h3>LARA TELES</h3>
                <p>Professora do ITA</p>
              </div>
            </div>
            
          </div>

          <div class="col-sm-6 col-md-6 col-lg-4">
           
            <div class="team-item">
              <div class="team-img">
                <img class="img-fluid" src={require('../Images/Palestrantes/marcia.jpg')} alt=""/>
                
              </div>
              <div class="info-text">
                <h3>Márcia Barbosa</h3>
                <p>Pesquisadora na UFRGS</p>
              </div>
            </div>
            
          </div>

          <div class="col-sm-6 col-md-6 col-lg-4">
           
            <div class="team-item">
              <div class="team-img">
                <img class="img-fluid" src={require('../Images/Palestrantes/silvia.jpg')} alt=""/>
                
              </div>
              <div class="info-text">
                <h3>Silvia Pimentel</h3>
                <p>Professora Doutora na PUC</p>
              </div>
            </div>
            
          </div>

          <div class="col-sm-6 col-md-6 col-lg-4">
           
            <div class="team-item">
              <div class="team-img">
                <img class="img-fluid" src={require('../Images/Palestrantes/valeria.jpg')} alt=""/>
                
              </div>
              <div class="info-text">
                <h3>Valeria Spechotto</h3>
                <p>Vice-presidente na Johnson&Johnson</p>
              </div>
            </div>
            
          </div>
          
        </div>
      </div>
      </section>
      
    );
  }
}


export default Speakers;
