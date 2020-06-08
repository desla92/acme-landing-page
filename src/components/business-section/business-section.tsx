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
        <p>Perchè siamo diversi</p>
        <h2>Perché la tua impresa è la cosa più importante per te. Ma anche per noi di ACME.</h2>
      </div>
    </section>
    );
  }

}
