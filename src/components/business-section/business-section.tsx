import { Component, ComponentInterface, h, getAssetPath } from '@stencil/core';

@Component({
  tag: 'business-section',
  styleUrl: 'business-section.scss',
  shadow: true,
  assetsDirs: ["assets"]
})
export class BusinessSection implements ComponentInterface {
  private bgStyle = {
    backgroundImage: `url("${getAssetPath("/assets/acme-business.jpeg")}")`
  }

  render() {
    return (
    <section style={this.bgStyle} class="business">
      <div class="box-bianco">
        <p class="titoletto">Perchè siamo adatti al tuo business</p>
        <h2>Amiamo i tuoi sogni.</h2>
        <p class="descrizione">La tua <b>impresa</b> è la cosa più <b>importante</b> per te. <br/> Ma anche per noi di ACME.</p>
        <button>Scopri le nostre soluzioni<ion-icon name="arrow-forward-outline"></ion-icon></button>
      </div>
    </section>
    );
  }

}
