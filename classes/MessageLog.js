import Pane from '../classes/Pane.js';
import WrappedDiv from '../classes/WrappedDiv.js';
import WrappedTextSpan from '../classes/WrappedTextSpan.js';


export default class MessageLog extends Pane {
  constructor() {
    super();

    this.element.classList.add('message_log');

    let messages = [];
    this.messages = messages;

    let messages_div = new WrappedDiv();
    messages_div.element.classList.add('messages_list');
    this.element.appendChild(messages_div.element);
    this.messages_div = messages_div;

  };

  write(message) {
    console.warn(`Writing ${message}`);
    let message_span = new WrappedTextSpan(`${message}<br>`);
    this.messages_div.element.appendChild(message_span.element);
    this.messages.push(message_span);
  };

}
