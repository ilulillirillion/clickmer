import uuidv6 from '../functions/uuidv6.js';
import { ProxyMixin } from '../mixins/ProxyMixin.js';


//export default class ProxyMixin(Thing) {
export default class Thing extends ProxyMixin(Object) {
  constructor({ name = 'thing' } = { name: 'thing' }) {
    super();
    //console.debug('Instantiating an object.');
    console.debug(`Constructing a Thing with name <${name}>.`);

    let class_name = this.constructor.name.toLowerCase();
    this.class_name = class_name;
    console.debug(`Instantiating a <${class_name}>.`);

    let _uuid = uuidv6();
    console.debug(`Generated _uuid for <${class_name}>: <${_uuid}>.`);
    this.uuid = `${class_name}_${_uuid}`
    console.debug(`Set <${class_name}> uuid to <${this.uuid}>.`);

    this.ticks_epoch = 0;

    this.name = name;
    console.debug(`<${this.uuid}> name set to <${this.name}>.`);

    this.tick_listeners = [];

  };

  get log_name() {
    return `${this.class_name}_${this.uuid}`;
  };

  tick() {
    console.debug(`Ticking <${this.uuid}>. (tick: <${this.ticks_epoch + 1}>)`);
    this.ticks_epoch += 1;
  };

};
