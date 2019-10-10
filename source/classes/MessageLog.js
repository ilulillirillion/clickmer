const Thing = require('../classes/Thing.js');


class MessageLog extends Thing {
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

module.exports = MessageLog;
