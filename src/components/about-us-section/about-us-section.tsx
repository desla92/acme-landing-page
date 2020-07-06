import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'about-us-section',
  styleUrl: 'about-us-section.scss',
  shadow: true,
})
export class AboutUsSection implements ComponentInterface {

  render() {
    return (
      <div class="container">
        <div class="chiSiamo">
        <div class="margin-right">
          <p class="azzurro">TRASPARENZA, QUALITÀ E INNOVAZIONE</p>
          <h2>Chi è Acme Enetrprise</h2>
          <p>Siamo una multinazionale di servizi alla persona e alle aziende che comprende <b>servizi finanziari e assicurativi</b>. Siamo un <b>brand storico</b> affermato nel mercato assicurativo italiano e costituiamo un punto di riferimento per i clienti in area <b>retail, PMI e professionisti</b>. Ci distinguiamo per trasparenza, qualità e innovazione dei nostri prodotti assicurativi.</p>
        </div>
        <div class="margin-right smallFr">
          <div><ion-icon name="shield-checkmark-outline"></ion-icon></div>
          <div>
            <b class="azzurro">A ciascuno la sua protezione</b>
            <p>Abbiamo soluzioni evolute e intelligenti, non solo per l’auto, ma anche per la casa, la salute, il risparmio e la previdenza. Siamo particolarmente attenti ai nuovi modelli di consumo e di lifestyle.</p>
          </div>
        </div>
        <div class="smallFr">
          <div><ion-icon name="briefcase-outline"></ion-icon></div>
          <div>
            <b class="azzurro">450 agenzie e 1.500 punti vendita </b>
            <p>La nostra rete commerciale è composta di 450 agenzie e oltre 1.500 punti vendita, distribuiti capillarmente sul territorio italiano, per offrirti un servizio qualificato, rapido ed efficiente.</p>
          </div>
        </div>
        </div>
        <h2 class="tac">Esplora i nostri servizi:</h2>
        <div class="button-wrapper">
          <a href="">Servizi Finanziari<ion-icon name="arrow-forward-outline"></ion-icon></a>
          <a href="">Servizi Assicrativi<ion-icon name="arrow-forward-outline"></ion-icon></a>
        </div>
      </div>
    );
  }

}
