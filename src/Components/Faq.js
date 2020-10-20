import React, { Component } from 'react';
import Faq from 'react-faq-component';

const data = {
  rows: [
    {
      title: "Qual a idade mínima para participação?",
      content: "Não existe idade mínima para participação. Meninas de todas as idades são bem-vindas. A única restrição é para a apresentação de trabalhos acadêmicos, na qual a participanete deve ter mais de 18 anos."
    },
    {
      title: "O evento é gratuito?",
      content: "O evento é gratuito apenas para estudandte do ensino fundamental. Para as demais inscritas existe uma taxa de R$50,00 para participação, caso seja apresentado algum trabalho a taxa é de R$70,00. Lembramos que existe um programa de isenção de taxa de inscrição, entre em contato para mais detalhes."
    },
    {
      title: "Posso me inscrever no evento mesmo não sendo estudante de engenharia?",
      content: "Claro! O foco do evento é sobre carreiras em Ciência, Tecnologia, Engenharia, Matemática e Áreas afins, mas todas são bem vindas. Incentivamos a máxima diversidade de participantes e carreiras possível."
    },
    {
      title: "Onde ocorrerá o evento?",
      content: "O evento ocorrerá na cidade de São José dos Campos, no campus do DCTA. O mapa na página indica a localização aproximada, mas próximo ao evento todas receberão os detalhes por e-mail."
    }]
}

const styles = {
    bgColor: "#560707",
    rowTitleColor: "white",
    rowContentColor: "#d3989a",
    arrowColor: "#d39898",
    rowContentPaddingLeft: "10px",
};

class FAQSession extends Component {
  render() {
    return (
      <section id="faq" className="section darkRed">
        <div className="row">
           <div className="seven columns main-col">
              <h2>FAQ</h2>
              <div >
                <Faq data={data} styles={styles}/>
              </div>
           </div>
        </div>
      </section>
    );
  }
}

export default FAQSession;
