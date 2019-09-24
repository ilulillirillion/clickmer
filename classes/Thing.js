import uuidv6 from '../functions/uuidv6.js';

export default class Thing {
  //static default_args = { 'name': 'thing' };
  constructor() {
    console.debug('Instantiating an object.');
    //let default_args = Thing.default_args;

    let class_name = this.constructor.name.toLowerCase();
    this.class_name = class_name;
    console.debug(`Instantiating a <${class_name}>.`);

    let _uuid = uuidv6();
    console.debug(`Generated _uuid for <${class_name}>: <${_uuid}>.`);
    this.uuid = `${class_name}_${_uuid}`
    console.debug(`Set <${class_name}> uuid to <${this.uuid}>.`);

    /*
    // Name.
    this.name = args.name;
    let default_name = default_args.name;
    if (!this.name) {
      console.debug(`Empty or invalid name <${this.name}> given for <${this.uuid}>, using default name <${default_name}>.`);
      this.name = default_name;
    };
    */
    this.name = 'thing';
    console.debug(`<${this.uuid}> name set to <${this.name}>.`);

    this.tick_listeners = [];

  };



  tick(game_data, ...args) {
    console.debug(`Ticking <${this.class_name}> <${this.uuid}>.`);
    try { this._tick(game_data, ...args) } catch (e) { console.warn(e) };
    //try { this.super.tick(game_data) } catch (e) { console.warn(e) };
    try { super.tick(game_data) } catch (e) { console.warn(e) };
    //try { super._tick(game_data) } catch (error) {};
  };
    //console.debug(`Ticking <${this.uuid}> with overrides <${overrides}>.`);
    //for (const [override_attribute, override_value] of Object.entries(overrides)) {
    //  console.warn(`Overriding <${this.uuid}>'s <${override_attribute}> attribute value of <${this[override_attribute]}> with <${override_value}>.`);
    //  this[override_attribute] = this.override_value;
    //  console.warn(`<${this.uuid}>'s <${override_value}> overridden to <${this[override_attribute]}>.`);
    //};
    /*
    console.debug(`Ticking <${this.class_name}> <${this.uuid}>.`);
    for (let listener of this.tick_listeners) {
      console.debug(`<${this.uuid}> invoking tick listener <${listener}>.`);
      listener(game_data);
    };
    */
  //};

  //propogateTickToSuper(master=null) {
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
  //};
};
