import { Component, ComponentInterface, h, getAssetPath, Listen} from '@stencil/core';

@Component({
  tag: 'acme-navbar',
  styleUrl: 'acme-navbar.scss',
  shadow: true,
  assetsDirs: ["/assets"],
})
export class AcmeNavbar implements ComponentInterface {


  @Listen('scroll', { target: 'window' })
  handleScroll(ev) {
    console.log('the body was scrolled', ev);
    console.log(ev.target.scrollingElement.scrollTop);
  }

  

  render() {
    return (
      <nav class="nav-container">
      <section class="nav">
          <ul class="left-side-nav">
            <a href="#"><img src={getAssetPath("/assets/logoMod.png")} alt="logo" /></a> 
            <li><a href="#">Per te e la tua famiglia</a></li>
            <li><a href="#">Per te e il tuo business</a></li>
        </ul>
        <ul class="rigth-side-nav"><li><a href="#">Crea il tuo preventivo<ion-icon name="return-down-forward-outline"></ion-icon></a></li></ul>
      </section>
    </nav>
    );
  }

}
