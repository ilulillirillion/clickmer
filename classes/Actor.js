import Thing from '../classes/Thing.js';


export default class Actor extends Thing {

  constructor(
      { uuid = null, name = 'actor', message_log = null, sex = null } =
      { uuid:  null, name:  'actor', message_log:  null, sex:  null }) {

    super({ uuid: uuid, name: name, message_log: message_log });

    this.name = name;
    if (!this.name || this.name === 'actor') {
      //this.name = this.generateRandomName();
      this.name = 'test';
    };

    this.sex = sex;
    if (!this.sex) {
      //this.sex = this.getRandomSex();
      this.sex = 'male';
    };

  };

};
