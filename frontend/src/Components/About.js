import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <section id="sobre" className="section lightRed">
        <div className="row" style={{ fontSize: "17px"}}>

           <div className="columns main-col">
              <h2>Sobre</h2>
            </div>

            <div id="carouselExampleIndicators" class="carousel slide col-md-12" data-ride="carousel" style={{marginTop: "20px"}}>
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100" src={require('../Images/carousel1.jpg')} alt="First slide"/>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src={require('../Images/carousel2.jpg')} alt="Second slide"/>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src={require('../Images/carousel3.jpg')} alt="Third slide"/>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>

          <div className="col-md-12" style={{marginTop: "10px"}}>
          <p style={{textAlign: "justify", marginTop: "20px"}}>O I Simpósio Mulheres em STEM visa promover o encontro de mulheres de todo o Brasil para divulgar seus trabalhos acadêmicos, gerar networking e discutir questões de igualdade de gênero.</p>

            </div>



            <div className="col-md-4" style={{textAlign: "center"}}>
            <i class="fa fa-3x fa-users"></i>
            <p>Público livre</p>
            </div>

            <div className="col-md-4" style={{textAlign: "center"}}>
            <i class="fa fa-3x fa-clock-o"></i>
            <p>13 e 14 de março de 2021</p>
            </div>

            <div className="col-md-4" style={{textAlign: "center"}}>
            <i class="fa fa-3x fa-map-marker"></i>
            <p>ITA, São José dos Campos - SP</p>
            </div>




        </div>
      </section>
    );
  }
}

export default About;
