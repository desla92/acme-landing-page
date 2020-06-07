import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'acme-subnav',
  styleUrl: 'acme-subnav.scss',
  shadow: true,
})
export class AcmeSubnav implements ComponentInterface {

  render() {
    return (
      <div class="subnav-container">
        <section class="subnav">
          <ul class="left-side-subnav">
            <li><a href="#">Il gruppo ACME</a></li>
            <li><a href="#">Faq</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Contatti</a></li>
            <li><a href="#"><ion-icon name="search-outline"></ion-icon></a></li>
          </ul>
          <ul><li><a href="#"><ion-icon name="person-outline"></ion-icon>Accedi all'area privata</a></li></ul>
        </section>
      </div>
    );
  }

}
