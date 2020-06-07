import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'acme-header',
  styleUrl: 'acme-header.scss',
  shadow: true,
})
export class AcmeHeader implements ComponentInterface {

  render() {
    return (
      <header>
        <acme-subnav></acme-subnav>
        <acme-navbar></acme-navbar>
      </header>
    );
  }

}
