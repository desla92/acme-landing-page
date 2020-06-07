import { Component, ComponentInterface, h, Prop } from '@stencil/core';

@Component({
  tag: 'div-servizio',
  styleUrl: 'div-servizio.scss',
  shadow: true,
})
export class DivServizio implements ComponentInterface {
  /**
   * attribute name to choose the ionicon 
  */
  @Prop() iconName: string; 
  /**
   * service's title 
  */
  @Prop() label: string;
  /**
   * service's description
  */
 @Prop() description: string;
  


  
  render() {
    return (
      <div class="servizio">
          <ion-icon name={this.iconName}></ion-icon>
          <h3>{this.label}</h3>
          <a href="#"><ion-icon class="freccia"name="arrow-forward-outline"></ion-icon>SCOPRI</a>
      </div>
    );
  }

}
