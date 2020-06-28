import { Component, ComponentInterface, h, Host, Element, getAssetPath} from '@stencil/core';

@Component({
  tag: 'acme-subnav',
  styleUrl: 'acme-subnav.scss',
  shadow: true,
  assetsDirs: ["assets"],
})
export class AcmeSubnav implements ComponentInterface {
  @Element() el: HTMLAcmeSubnavElement;
  private modal;
  componentDidLoad(){
    this.modal = this.el.shadowRoot.querySelector('#id01') as any;
    
  }

  private openModal=(evt)=>{
    console.log(evt)
    this.modal.style.display='block';
  }
  private closeModal=(evt)=>{
    console.log(evt)
    this.modal.style.display='none';
  }
  render() {
    return (
      <Host>
      <div class="subnav-container">
        <section class="subnav">
          <ul class="left-side-subnav">
            <li><a href="#">Il gruppo ACME</a></li>
            <li><a href="#">Faq</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Contatti</a></li>
            <li><a href="#"><ion-icon name="search-outline"></ion-icon></a></li>
          </ul>
          <ul><li ><a onClick={this.openModal} href="#"><ion-icon name="person-outline"></ion-icon>Accedi all'area privata</a></li></ul>
        </section>
      </div>

      <div id="id01" class="modal">
  
        <form class="modal-content animate" action="/action_page.php" method="post">
          <div class="header">
            <span onClick={this.closeModal} class="close" title="Close Modal"><ion-icon name="close-circle-outline"></ion-icon></span>
            <h2>Accedi alla tua area privata</h2>
          </div>
          <div class="avatarContainer">
            <img src={getAssetPath(`/assets/acme-avatar.png`)} alt=""/>
          </div>
          <div class="container">
            <label htmlFor="uname"><b>Username</b></label>
            <input type="text" placeholder="Inserisci Username" name="uname" required/>

            <label htmlFor="psw"><b>Password</b></label>
            <input type="password" placeholder="Inserisci Password" name="psw" required/>
        
            <button type="submit">entra</button>
            <label>
            <input type="checkbox" name="remember"/> Ricordami
            </label>
          </div>

    <div class="container1">
      <button onClick={this.closeModal} type="button" class="cancelbtn">cancella</button>
      <span class="psw"><a href="#">Password dimenticata?</a></span>
    </div>
  </form>
</div>
      </Host>
    );
  }

}
