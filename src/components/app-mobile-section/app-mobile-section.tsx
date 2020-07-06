import { Component, ComponentInterface, h, getAssetPath } from '@stencil/core';

@Component({
  tag: 'app-mobile-section',
  styleUrl: 'app-mobile-section.scss',
  shadow: true,
  assetsDirs: ["assets"]
})
export class AppMobileSection implements ComponentInterface {
  
  render() {
    return (
      <div class="container">
        <div class="dowload-app-mobile-left">
          <div class="lblue-up slide-in"></div>
          <div class="lblue-down slide-in40"></div>
          <div class="blue-up slide-in"></div>
          <div class="blue-down slide-in40"></div>
          <img src={getAssetPath(`/assets/acme-mobile-3.png`)} alt=""/>
        </div>
        <div class="dowload-app-mobile-right">

        <h2 >Scarica la nuova applicazione ACME</h2>
        <p>Più bella e più semplice da usare.</p>
        <p>ENTRA A FAR PARTE DEL MONDO ACME ENTERPRISE.</p>
        <p>NUOVE FUNZIONALITÀ E NUOVI SERVIZI, PER TENERTI AGGIORNATO,<br/> COME SEMPRE, COMODAMENTE DAL TUO SMARTPHONE.</p>
        <p><b>Scarica l’app!</b></p>
        <div class="button-container">
          <button><ion-icon name="logo-apple"></ion-icon> <p> Download on the <br/><p class="store">App Store</p> </p></button>
          <button><ion-icon name="logo-google-playstore"></ion-icon> <p>Download on<p class="store"> Google Play</p></p> </button>
        </div>
        </div>
      </div>
    );
  }

}
