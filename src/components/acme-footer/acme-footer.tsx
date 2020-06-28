import { Component, ComponentInterface, h, getAssetPath,} from '@stencil/core';

@Component({
  tag: 'acme-footer',
  styleUrl: 'acme-footer.scss',
  shadow: true,
  assetsDirs: ["assets"]
})
export class AcmeFooter implements ComponentInterface {
  
  private handleScrollUpClick = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  render() {
    return (
      <footer>
        <div class="container">
          <section class="first-footer-section">
            <div><hr/></div>
            <div>
              <a href=""><ion-icon class="facebook" name="logo-facebook"></ion-icon></a>
              <a href=""><ion-icon class="linkedin" name="logo-linkedin"></ion-icon></a>
              <a href=""><ion-icon class="twitter" name="logo-twitter"></ion-icon></a>
              <a href=""><ion-icon class="youtube" name="logo-youtube"></ion-icon></a>
              </div>
            <div><hr/></div>
          </section>
          <section class="second-footer-section">
            <div>
              <h3>INFORMAZIONI GENERALI</h3>
              <a href=""><p>Agenzia e centri convenzionati</p></a>
              <a href=""><p>Lavora con noi</p></a>
              <a href=""><p>Investor relations</p> </a>
              <a href=""><p>Elenco Centro Liquidazione Danni</p> </a>
              <a href=""><p>Fondi Interni</p> </a>
              <a href=""><p>Gestioni Separate</p> </a>
              <a href=""><p>Metodi di pagamento</p> </a>
            </div>
            <div>
            <h3>AZIENDA</h3>
              <a href=""><p>Contatti</p></a>
              <a href=""><p>FAQ</p></a>
              <a href=""><p>Reclami</p></a>
              <a href=""><p>Privacy e GDPR</p></a>
              <a href=""><p>Attestato di rischio</p></a>
              <a href=""><p>Ricerca coperture vita</p></a>
              <a href=""><p>Sostenibilità</p></a>
            </div>
            <div class="flex-end">
              <div onClick={this.handleScrollUpClick}><ion-icon class="button-up"name="chevron-up-outline"></ion-icon></div>
            </div>
          </section>
          <section class="third-footer-section">
            <a href="#"><img src={getAssetPath("/assets/logoMod.png")} alt="logo" /></a>
            <p class="disclaimer"><b>© 2020 ACME Enterprise Spa</b> - P.I. 00000000000 <br/> L'Impresa opera attraverso il sito in qualità di distributore di prodotti assicurativi. <br/>ACME Enterprise | Attenzione: il sito è stato creato a scopo didattico dagli allievi del corso accademico Web & Digital Media del primo anno della Scuola Mohole. Alcuni contenuti e riferimenti aziendali sono di fantasia.</p>
          </section>
        </div>
      </footer>
    );
  }

}








