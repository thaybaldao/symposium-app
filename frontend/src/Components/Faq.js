import React, { Component } from 'react';
import Faq from 'react-faq-component';

const data = {
  rows: [
    {
      title: "Qual a idade mínima para participação?",
      content: "Não existe idade mínima para participação. Todxs são bem-vindxs. A única restrição é para a apresentação de trabalhos acadêmicos, em que é exigido ter mais de 18 anos."
    },
    {
      title: "O evento é gratuito?",
      content: "Apenas para aqueles que possuem menos de 18 anos. Para os demais existe uma taxa de inscrição. Caso você participe do evento apenas como ouvinte, a taxa é de R$50,00. Caso você partice do evento como apresentador de trabalho acadêmico, a taxa é de R$70,00. Todavia, existe um programa de isenção de taxa de inscrição. Entre em contato para mais detalhes."
    },
    {
      title: "Posso me inscrever no evento mesmo não sendo estudante de exatas?",
      content: "Claro! O evento é sobre carreiras em Ciência, Tecnologia, Engenharia, Matemática e Áreas afins, mas todxs são bem-vindxs. Incentivamos a máxima diversidade de participantes possível."
    },
    {
      title: "Onde ocorrerá o evento?",
      content: "O evento ocorrerá em São José dos Campos - SP, no campus do DCTA. Para uma localização mais precisa, recomendamos que visualize o mapa apresentado nesta página."
    }]
}

const styles = {
    bgColor: "#d39898",
    rowTitleColor: "white",
    rowContentColor: "#560707",
    arrowColor: "#d39898",
    rowContentPaddingLeft: "10px",
};

class FAQSession extends Component {
  render() {
    return (
      <section id="faq" className="section lightPink">
        <div className="row">
          <h2>FAQ</h2>
          <div >
            <Faq data={data} styles={styles}/>
          </div>
        </div>
      </section>
    );
  }
}

export default FAQSession;
