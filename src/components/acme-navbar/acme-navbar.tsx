import { Component, ComponentInterface, h, getAssetPath, Listen, Element, Prop, Host} from '@stencil/core';

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
    const placeholder = this.el.shadowRoot.querySelector(".placeholder") as HTMLElement;
    if (ev.target.scrollingElement.scrollTop > this.el.offsetTop) {
      placeholder.style.display="block";
      this.navBarClass = "nav-container sticky";
    } else {
      this.navBarClass = "nav-container";
      placeholder.style.display="none";
    }
  }


  render() {
    return (
    <Host>
      <div class="placeholder"></div>
      <nav class={this.navBarClass}>
        <section class="nav">
            <ul class="left-side-nav">
              <a href="#"><img src={getAssetPath("/assets/logoMod.png")} alt="logo" /></a> 
              <li class="dropdown"><a href="#">Per te e la tua famiglia</a>
              <div class="dropdown-content">
                          <a href="#"><ion-icon name="home-outline"></ion-icon>Casa</a>
                          <a href="#"><ion-icon name="medkit-outline"></ion-icon>Salute</a>
                          <a href="#"><ion-icon name="bandage-outline"></ion-icon>Infortuni</a>
                          <a href="#"><ion-icon name="shield-checkmark-outline"></ion-icon>Protezione</a>
                          <a href="#"><ion-icon name="server-outline"></ion-icon>Investimenti</a>
                          <a href="#"><ion-icon name="airplane-outline"></ion-icon>Viaggi</a>
                          <a href="#"><ion-icon name="bulb-outline"></ion-icon>Altre esigenze</a>
                      </div></li>
              <li class="dropdown"><a href="#">Per te e il tuo business</a>
              <div class="dropdown-content">
                          <a href="#"><ion-icon name="bar-chart-outline"></ion-icon>PMI</a>
                          <a href="#"><ion-icon name="briefcase-outline"></ion-icon>Professionisti</a>
                          <a href="#"><ion-icon name="business-outline"></ion-icon>Immobili</a>
                          <a href="#"><ion-icon name="bulb-outline"></ion-icon>Altre esigenze</a>
                      </div></li>
          </ul>
          <ul class="right-side-nav"><li><a href="#">Crea il tuo preventivo<ion-icon name="arrow-forward-outline"></ion-icon></a></li></ul>
        </section>
      </nav>
    </Host>
    );
  }

}
