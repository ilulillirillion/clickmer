import Thing from '../classes/Thing.js'


export default class WrappedDomElement extends Thing {
  //static default_args = { 'name': 'element' };
  //constructor({ name = 'element' } = {}) {
  constructor(master=null) {
    super();
    console.debug(`Instantiating WrappedDomElement <${name}> (<${this.uuid}>).`);

    this.master = master;

    //this.element = this.createDomElement();
    //this.element = document.createElement('p');

  };

  tick(master=null) {
    console.debug(`Ticking <${this.uuid}>.`);
    //console.debug(`<${this.uuid
    //super(master);
    this.propogateTickToSuper();
    if (master) {
      this.master = this.adoptMaster();
    };
  };

  createDomElement() {
    console.warn(`Triggered WrappedDomElement <${this.uuid}> createDomElement function. Normally, a subclass method should be overriding this.`);
    return null;
  };

  adoptMaster(master) {
    console.debug(`<${this.uuid}> adopting new master <${master.uuid}>.`);
    return master
  };
};
