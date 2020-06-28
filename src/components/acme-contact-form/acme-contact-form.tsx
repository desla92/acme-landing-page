import { Component, ComponentInterface, h, Element} from '@stencil/core';

@Component({
  tag: 'acme-contact-form',
  styleUrl: 'acme-contact-form.scss',
  shadow: true,
})
export class AcmeContactForm implements ComponentInterface {
  @Element() el: HTMLAcmeContactFormElement;
  private fname;
  private lname;
  private greenChecks;
  private errors;
  private email;
  private textarea;
  private myForm;
  componentDidLoad(){
    this.fname = this.el.shadowRoot.querySelector('#fname') as any;
    this.lname = this.el.shadowRoot.querySelector('#lname') as any;
    this.email = this.el.shadowRoot.querySelector('#email') as any;
    this.textarea = this.el.shadowRoot.querySelector('#subject') as any;
    this.greenChecks = Array.from(this.el.shadowRoot.querySelectorAll('ion-icon')) as any;
    this.errors = Array.from(this.el.shadowRoot.querySelectorAll('.error')) as any;
    this.myForm = this.el.shadowRoot.querySelector('#my-form') as any;
    this.myForm.addEventListener('keydown',(evt)=>{
      if(evt.keyCode === 13){
        evt.preventDefault();
      }
    })
  }

  private validateFname = (evt)=>{
    if(this.fname.value === ""){
      this.fname.style="border: solid 2px red;";
      (this.greenChecks)[0].style.display="none";
      (this.errors)[0].style.display="block";
      return false;
    } else{
      this.fname.style="border: 1px solid #ccc";
      (this.greenChecks)[0].style.display="block";
      (this.errors)[0].style.display="none";
      return true;
    }
  }
  private validateLname = (evt)=>{
    if(this.lname.value === ""){
      this.lname.style="border: solid 2px red;";
      (this.greenChecks)[1].style.display="none";
      (this.errors)[1].style.display="block";
      return false;
    } else{
      this.lname.style="border: 1px solid #ccc";
      (this.greenChecks)[1].style.display="block";
      (this.errors)[1].style.display="none";
      return true;
    }
  }
  private validateEmail=(evt)=>{  
    const atposition=this.email.value.indexOf("@");  
    const dotposition=this.email.value.lastIndexOf("."); 
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=this.email.value.length){ 
      console.log(this.email.value) 
      this.email.style="border: solid 2px red;";
      (this.greenChecks)[2].style.display="none";
      (this.errors)[2].style.display="block";
      return false
  }  else{
    this.email.style="border: 1px solid #ccc";
    (this.greenChecks)[2].style.display="block";
    (this.errors)[2].style.display="none";
    return true;
  }
} 
private checkTextArea = (evt)=>{
  if(this.textarea.value === ""){
    this.textarea.style="border: solid 2px red;";
    (this.greenChecks)[3].style.display="none";
    (this.errors)[3].style.display="block";
    return false;
  } else{
    this.textarea.style="border: 1px solid #ccc";
    (this.greenChecks)[3].style.display="block";
    (this.errors)[3].style.display="none";
    return true;
  }
}
private submitForm=(evt)=>{
  if(!this.validateFname(evt) && !this.validateLname(evt) && !this.validateEmail(evt) && !this.checkTextArea(evt)){
    evt.preventDefault();
  }
}
  render() {
    return (
      <div class="container">
        <h2>Contattaci</h2>
        <p>Se hai qualche dubbio e vuoi chiederci qualcosa, compila il form sottostante <br/>  oppure chiama il numero verde 800 095 095 dal lunedì al venerdì dalle ore 08.30 alle ore 19.00</p>
      <div class="formContainer">
      
      <form onSubmit={this.submitForm} id="my-form" action=""  method="">
        <label htmlFor="fname">Nome</label>
        <div class="row-form">
          <input onBlur={this.validateFname} type="text" id="fname" name="firstname" placeholder="Il tuo nome"/>
          <ion-icon name="checkmark-outline"></ion-icon>
        </div>
        <p class="error">* Campo obbligatorio</p>
        
    
        <label htmlFor="lname">Cognome</label>
        <div class="row-form">
        <input onBlur={this.validateLname} type="text" id="lname" name="lastname" placeholder="Il tuo cognome"/>
        <ion-icon name="checkmark-outline"></ion-icon>
        </div>
        <p class="error">* Campo obbligatorio</p>
    
        <label htmlFor="email">Email</label>
        <div class="row-form">
        <input onBlur={this.validateEmail} type="text" id="email" name="email" placeholder="La tua mail"/>
        <ion-icon name="checkmark-outline"></ion-icon>
        </div>
        <p class="error">* Campo obbligatorio</p>
    
        <label htmlFor="subject">Richiesta</label>
        <div class="row-form">
        <textarea onBlur={this.checkTextArea} id="subject" name="subject" placeholder="Inserisci qui il tuo testo" ></textarea>
        <ion-icon name="checkmark-outline"></ion-icon>
        </div>
        <p class="error">* Campo obbligatorio</p>

        <input id="submit" type="submit" value="Invia richiesta"/>
      </form>
    </div>
    </div>
    );
  }

}
