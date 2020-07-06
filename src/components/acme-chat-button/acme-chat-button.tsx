import { Component, ComponentInterface, h, Host, Element } from '@stencil/core';

@Component({
  tag: 'acme-chat-button',
  styleUrl: 'acme-chat-button.scss',
  shadow: true,
})
export class AcmeChatButton implements ComponentInterface {
  @Element() el: HTMLAcmeChatButtonElement;
  private showMessage(element){
    element.style.display= "block";
  }

  componentDidLoad(){
    const chatButton = this.el.shadowRoot.querySelector('button') as HTMLElement;
    const chatBox = this.el.shadowRoot.querySelector('.chatbox') as HTMLElement;
    const closeButton = this.el.shadowRoot.querySelector('.close') as HTMLElement;
    const message = this.el.shadowRoot.querySelector('.message') as HTMLElement;
    const sendButton = this.el.shadowRoot.querySelector('.send') as HTMLElement;
    const body = this.el.shadowRoot.querySelector('.body') as HTMLElement;
    chatButton.addEventListener('click', ()=>{
      chatBox.style.display= "grid";
      chatButton.style.display= "none";
      setInterval(() => this.showMessage(message), 1000);
    })
    closeButton.addEventListener('click', ()=>{
      chatBox.style.display= "none";
      chatButton.style.display= "block";
      })
      sendButton.addEventListener('click', (evt:any)=>{
        console.log(evt)
        const p = document.createElement('p');
        p.innerText = evt.path[5].children[0].value;
        p.classList.add('sent-message');
        if(evt.path[5].children[0].value !== "" && evt.path[5].children[0].value !== undefined){
          body.appendChild(p);
          evt.path[5].children[0].value = "";
        };
      })
  }

  render() {
    return (
      <Host>
      <button class="start-chat-box-button tooltip">
          <ion-icon name="chatbubbles-outline"></ion-icon>
          <span class="tooltiptext">Chiedi ad ACME</span>
      </button>
      <div class="chatbox">
        <div class="header">
          <p><b>CHATTA CON NOI</b> <br/>Acme ti ascolta e ti aiuta</p><ion-icon class="close" name="close-circle-outline"></ion-icon>
        </div>
        <div class="body">
          <p class="message">Ciao! 👋 <br/> Sono il tuo assistente virtuale personale. <br/> In cosa posso esserti utile? </p>
        </div>
        <div class="footer">
          <textarea placeholder="Scrivi il tuo messaggio" name="msg" required></textarea>
          <ion-icon class="send" name="send"></ion-icon></div>
        </div>
      </Host>
    );
  }

}
