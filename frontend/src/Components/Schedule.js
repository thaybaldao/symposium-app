import React, { Component } from 'react';

class Schedule extends Component {
  render() {
    return (
      <section id="programacao" className="section white schedule">
        <div className="row">
           <div className="nine columns main-col">
              <h2>Programação</h2>
           </div>
        </div>

        <div class="container">
          <div class="schedule-area row">
            <div class="schedule-tab-title col-md-3 col-lg-3 col-xs-12">
              <div class="table-responsive">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item">
                    <a class="nav-link active" id="monday-tab" data-toggle="tab" href="#monday" role="tab" aria-controls="monday" aria-expanded="true">
                      <div class="item-text">
                        <h4>Sexta</h4>
                        <h5>13 de março</h5>
                      </div>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" id="tuesday-tab" data-toggle="tab" href="#tuesday" role="tab" aria-controls="tuesday">
                      <div class="item-text">
                        <h4>Sábado</h4>
                        <h5>14 de março</h5>
                      </div>
                    </a>
                  </li>

                </ul>
              </div>
            </div>
            <div class="schedule-tab-content col-md-9 col-lg-9 col-xs-12 clearfix">
              <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="monday" role="tabpanel" aria-labelledby="monday-tab">
                  <div id="accordion">
                    <div class="card">
                      <div id="headingOne">
                        <div class="collapsed card-header" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">

                          <span class="time">10:00 - 11:30</span>
                          <h4 style={{color: "#560707"}}>Palestra de abertura</h4>
                          <h5 class="name">Valéria Spechotto</h5>
                        </div>
                      </div>
                      <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                        <div class="card-body">
                          <p>Consectetur adipisicing elit. Quod distinctio impedit sint accusantium ducimus lites consequuntur innobisl dolores saepe.Proin sit amet turpis lobortis.</p>
                          <div class="location">
                            <span>Local:</span> Prédio de ciências fundamentais do ITA
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div id="headingTwo">
                        <div class="collapsed card-header" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">

                          <span class="time">11:30 - 12:30</span>
                          <h4 style={{color: "#560707"}}>Mesa Redonda</h4>
                          <h5 class="name">Betina Roxo e Lara Teles</h5>
                        </div>
                      </div>
                      <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                        <div class="card-body">
                          <p>Consectetur adipisicing elit. Quod distinctio impedit sint accusantium ducimus lites consequuntur innobisl dolores saepe.Proin sit amet turpis lobortis.</p>
                          <div class="location">
                            <span>Local:</span> Prédio de ciências fundamentais do ITA
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div id="headingThree">
                        <div class="collapsed card-header" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">

                          <span class="time">12:30 - 14:30</span>
                          <h4 style={{color: "#560707"}}>Aumentando a diversidade</h4>
                          <h5 class="name">Adriana Tonini</h5>
                        </div>
                      </div>
                      <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                        <div class="card-body">
                          <p>Consectetur adipisicing elit. Quod distinctio impedit sint accusantium ducimus lites consequuntur innobisl dolores saepe.Proin sit amet turpis lobortis.</p>
                          <div class="location">
                            <span>Local:</span> Prédio de ciências fundamentais do ITA
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="tuesday" role="tabpanel" aria-labelledby="tuesday-tab">
                  <div id="accordion2">
                    <div class="card">
                      <div id="headingOne1">
                        <div class="collapsed card-header" data-toggle="collapse" data-target="#collapseOne1" aria-expanded="false" aria-controls="collapseOne1">

                          <span class="time">10:00 - 11:30</span>
                          <h4>Mesa Redonda</h4>
                          <h5 class="name">Silvia Pimentel e Lara Teles</h5>
                        </div>
                      </div>
                      <div id="collapseOne1" class="collapse show" aria-labelledby="headingOne1" data-parent="#accordion2">
                        <div class="card-body">
                          <p>Consectetur adipisicing elit. Quod distinctio impedit sint accusantium ducimus lites consequuntur innobisl dolores saepe.Proin sit amet turpis lobortis.</p>
                          <div class="location">
                            <span>Local:</span> Prédio de ciências fundamentais do ITA
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div id="headingTwo2">
                        <div class="collapsed card-header" data-toggle="collapse" data-target="#collapseTwo2" aria-expanded="false" aria-controls="collapseTwo2">
                          <span class="time">11:30 - 14:30</span>
                          <h4>Como é ser mulher no meio acadêmico</h4>
                          <h5 class="name">Márcia Barbosa</h5>
                        </div>
                      </div>
                      <div id="collapseTwo2" class="collapse" aria-labelledby="headingTwo2" data-parent="#accordion2">
                        <div class="card-body">
                          <p>Consectetur adipisicing elit. Quod distinctio impedit sint accusantium ducimus lites consequuntur innobisl dolores saepe.Proin sit amet turpis lobortis.</p>
                          <div class="location">
                            <span>Local:</span> Prédio de ciências fundamentais do ITA
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Schedule;
