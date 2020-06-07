import { Component, ComponentInterface, h, Host } from '@stencil/core';

@Component({
  tag: 'acme-website',
  styleUrl: 'acme-website.scss',
  shadow: true,
})
export class AcmeWebsite implements ComponentInterface {

  render() {
    return ( 
      <Host>
        <acme-header></acme-header>
        <acme-sections></acme-sections>
        {/* <acme-contact-form></acme-contact-form> */}
        <acme-footer></acme-footer>
      </Host>
    );
  }

}
