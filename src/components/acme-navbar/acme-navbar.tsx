import { Component, ComponentInterface, h, getAssetPath, Listen, Element, Prop} from '@stencil/core';

@Component({
  tag: 'acme-navbar',
  styleUrl: 'acme-navbar.scss',
  shadow: true,
  assetsDirs: ["/assets"],
})
export class AcmeNavbar implements ComponentInterface {
  /**
   *  string that identifies the nav class 
   */
  @Prop() navBarClass: string = "nav-container";

  @Element() el: HTMLAcmeNavbarElement;

  @Listen('scroll', { target: 'window' })
  
  handleScroll(ev) {
    if (ev.target.scrollingElement.scrollTop > this.el.offsetTop) {
      this.navBarClass = "nav-container sticky";
    } else {
      this.navBarClass = "nav-container";
    }
  }


  render() {
    return (
    <nav class={this.navBarClass}>
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
