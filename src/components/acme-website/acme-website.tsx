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
        <acme-contact-form></acme-contact-form>
        <acme-footer></acme-footer>
      </Host>
    );
  }

}
/* tutti gli a non collegati devono avere void di js
tutti i grigi devono essere gli stessi, presumibilmente tre
accedi con overlay e box in mezzo
section about us con scopri servizi finanziari e assicurativi
section mobile con Riggio
form con tasto disabled se tutti i campi non sono filled con bordo rosso: fatto anche se non sono sicura della riuscita effettiva in tutti i casi e poi vorrei che uscisse un messaggio di effettiva ricezione e conferma dei dati. Purtroppo con tasto invio il form parte direttamente. Aggiungere messaggio diverso se mail non è valida.
*/