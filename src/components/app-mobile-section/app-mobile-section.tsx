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
          <h2 >Scarica la nuova applicazione ACME</h2>
          <div class="lblue-up slide-in"></div>
          <div class="lblue-down slide-in40"></div>
          <div class="blue-up slide-in"></div>
          <div class="blue-down slide-in40"></div>
          <img src={getAssetPath(`/assets/acme-mobile-3.png`)} alt=""/>
        </div>
        <div class="dowload-app-mobile-right"></div>
      </div>
    );
  }

}
