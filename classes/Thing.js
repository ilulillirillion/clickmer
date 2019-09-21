import uuidv6 from '../functions/uuidv6.js';

export default class Thing {
  constructor() {
    console.debug('Instantiating an object.');
    let class_name = this.constructor.name.toLowerCase();
    console.debug(`Instantiating a <${class_name}>.`);

    let _uuid = uuidv6();
    console.debug(`Generated _uuid for <${class_name}>: <${_uuid}>.`);
    this.uuid = `${class_name}_${_uuid}`
    console.debug(`Set <${class_name}> uuid to <${this.uuid}>.`);
  };
};
