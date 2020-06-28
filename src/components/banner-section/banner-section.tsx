import { Component, ComponentInterface, h, getAssetPath } from '@stencil/core';

@Component({
  tag: 'banner-section',
  styleUrl: 'banner-section.scss',
  shadow: true,
  assetsDirs: ["assets"]
})
export class BannerSection implements ComponentInterface {

  private bgStyle = {
    backgroundImage: `url("${getAssetPath("/assets/acme-building-3.jpeg")}")`
  }

  render() {
    return (
      <section style={this.bgStyle} class="banner">
        <h2>#stasenzapensieri</h2> 
        <br/> 
        <h1>Affidati e rilassati.
        <br/>
        Ti assicuriamo noi.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere cupiditate ut, velit veniam aliquid quis aliquam. Officiis provident molestias fugit?</p>
        <div class="servizi">
          <div-servizio iconName="car-sport-outline" label="Mobilità" ></div-servizio>
          <div-servizio iconName="home-outline" label="Casa e Salute" ></div-servizio>
          <div-servizio iconName="analytics-outline" label="Investimenti" ></div-servizio>
          <div-servizio iconName="business-outline" label="Imprese" ></div-servizio>
        </div>
      </section>
    );
  }

}
