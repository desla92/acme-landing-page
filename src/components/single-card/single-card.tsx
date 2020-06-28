import { Component, ComponentInterface, h, getAssetPath, Prop } from '@stencil/core';

@Component({
  tag: 'single-card',
  styleUrl: 'single-card.scss',
  shadow: true,
  assetsDirs: ["assets"]
})
export class SingleCard implements ComponentInterface {
  /**
   * image file name
  */
  @Prop() fileName: string;
  /**
   * card title
  */
  @Prop() titolo: string;
  /**
   * card subtitle
  */
  @Prop() titoletto: string;
  /**
   * card description
  */
  @Prop() descrizione: string;
  /**
   * what is written inside the clickable tag a at the bottom of the card
  */
  @Prop() scrittaBottone: string;

  render() {
    return (
      <div class="grid-container">
        <img src={getAssetPath(`/assets/${this.fileName}`)} alt="" width="350"/>
        <div class="box">
          <div>
            <h4>{this.titolo}</h4>
            <p class="titoletto">{this.titoletto}</p>
            <p class="descrizione">{this.descrizione}</p>
          </div>
          <a href="javascript:void(0)">{this.scrittaBottone}<ion-icon name="arrow-forward-outline"></ion-icon></a>
        </div>
      </div>
    );
  }

}
