import uuidv6 from '../functions/uuidv6.js';

export default class Thing {
  static default_args = { 'name': 'thing' };
  constructor(args = Thing.default_args) {
    console.debug('Instantiating an object.');
    let default_args = Thing.default_args;

    let class_name = this.constructor.name.toLowerCase();
    this.class_name = class_name;
    console.debug(`Instantiating a <${class_name}>.`);

    let _uuid = uuidv6();
    console.debug(`Generated _uuid for <${class_name}>: <${_uuid}>.`);
    this.uuid = `${class_name}_${_uuid}`
    console.debug(`Set <${class_name}> uuid to <${this.uuid}>.`);

    // Name.
    this.name = args.name;
    let default_name = default_args.name;
    if (!this.name) {
      console.debug(`Empty or invalid name <${this.name}> given for <${this.uuid}>, using default name <${default_name}>.`);
      this.name = default_name;
    };
    console.debug(`<${this.uuid}> name set to <${this.name}>.`);
  };

  tick() {
    console.debug(`Ticking <${this.uuid}>.`);
  };

  propogateTickToSuper(master=null) {
    //let master_string = if (master) { return master.uuid } else { return "'(no master)'" };
    //console.debug(`<${this.uuid} super-propogating tick to <${super.uuid}> with master <}>.`);
    /*
    if (master) {
      console.debug(`<${this.uuid}> super-propogating tick to <${super.uuid}> with master <${master.uuid}>.`);
    } else {
      console.debug(`<${this.uuid}> super-propogating tick to <${super.uuid}>.`);
    };
    super.tick(master);
    */
    //super.tick();
  };
};
