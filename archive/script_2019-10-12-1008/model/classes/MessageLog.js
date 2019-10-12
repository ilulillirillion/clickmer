import Thing from '../classes/Thing.js';


export default class MessageLog extends Thing {
  constructor({ uuid = null, name = 'messagelog' } =
              { uuid: null, name: 'messagelog' }) {
    super({ uuid: uuid, name: name });

    this.messages = [];

  };

  write(message) {
    console.info(`New Message:`, message);
    this.messages.push(message);
  };

};
