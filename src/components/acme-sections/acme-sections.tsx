import { Component, ComponentInterface, h, Host } from '@stencil/core';

@Component({
  tag: 'acme-sections',
  styleUrl: 'acme-sections.scss',
  shadow: true,
})
export class AcmeSections implements ComponentInterface {
  
  render() {
    return (
      <Host>
        <banner-section></banner-section>
        <what-you-need-section></what-you-need-section>
        <business-section></business-section>
        <cards-section></cards-section>
        <news-section></news-section> 
      </Host>
    );
  }

}
