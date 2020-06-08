import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'what-you-need-section',
  styleUrl: 'what-you-need-section.scss',
  shadow: true,
})
export class WhatYouNeedSection implements ComponentInterface {

  render() {
    return (
      <section class="section-container">
        <div class="grid-container">
          <div class="question">
            <p>Di cosa hai bisogno?</p>
            <h2>Carrozzeria, agenzia o clinica?</h2>
            <a href="#">Scopri i nostri servizi<ion-icon name="return-down-forward-outline"></ion-icon></a>
            </div>
          <div class="card-deck">
            <div class="card agenzia">
              <p class="nome-agenzia">Agenzie</p>
              <ion-icon name="airplane-outline"></ion-icon>
              <h3 class="freccia-agenzia"><ion-icon name="chevron-down-outline"></ion-icon></h3>
          </div>
            <div class="card carrozzeria">
               <h1 class="freccia-carrozzeria"><ion-icon name="chevron-down-outline"></ion-icon></h1>
              <ion-icon name="hammer-outline"></ion-icon>
              <p class="nome-carrozzeria">Carrozzerie</p>
            </div>
        <div class="card clinica">
          <h1 class="freccia-clinica"><ion-icon name="chevron-down-outline"></ion-icon></h1>
          <ion-icon name="bandage-outline"></ion-icon>
          <p class="nome-clinica">Cliniche</p>
        </div>  
        </div>
        </div>
      </section>
    );
  }

}
