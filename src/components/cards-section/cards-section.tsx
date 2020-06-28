import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'cards-section',
  styleUrl: 'cards-section.scss',
  shadow: true,
})
export class CardsSection implements ComponentInterface {

  render() {
    return (
      <div class="section"> 
        <div class="intestazione">
          <p class="titoletto">perchè siamo adatti a te</p>
          <h2>Una polizza per ogni tua esigenza</h2>
          <p class="descrizione">Ci stanno a cuore le <b>persone</b>, le loro esigenze e le loro opinioni. <br/> Scopri i nostri <b>servizi ai privati</b> e guarda cosa dicono di noi le persone che ci hanno già scelto. </p>
        </div>
        <div class="cards-container">
          <single-card fileName="acme-people-cut-2.jpg" titolo="Maria" titoletto="tra poco diventerò mamma" descrizione="Sed mauris velit, gravida et consectetur ac, sollicitudin in quam. " scrittaBottone="scopri dimensione futuro"></single-card>
          <single-card fileName="acme-people-cut-1.jpg" titolo="Giulia e Carlo" titoletto="vorremmo sposarci entro l'anno" descrizione="Proin auctor tempor purus ac rhoncus. Phasellus id sagittis libero." scrittaBottone="scopri acmeincasa"></single-card>
          <single-card fileName="acme-people-cut-3.jpg" titolo="Franco" titoletto="spesso viaggio in auto" descrizione="Suspendisse eu feugiat eros. Pellentesque in metus elit. Nunc purus." scrittaBottone="scopri a ruota libera"></single-card>
        </div>
      </div>
    );
  }

}
