import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'acme-chat-button',
  styleUrl: 'acme-chat-button.scss',
  shadow: true,
})
export class AcmeChatButton implements ComponentInterface {

  render() {
    return (
      <button class="start-chat-box-button tooltip">
          <ion-icon name="chatbubbles-outline"></ion-icon>
          <span class="tooltiptext">Chiedi ad ACME</span>
      </button>
    );
  }

}
