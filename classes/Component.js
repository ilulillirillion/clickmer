import Thing from '../classes/Thing.js';


export default class Component extends Thing {
  
  constructor({ owner = null, uuid = null, name = 'component' } =
              { owner: null, uuid: null, name: 'component' }) {
    super({ uuid, name });

    this.owner = owner;
    if (!this.owner) {
      console.warn(
          `Component <${this.uuid}> instantiated without an owner.`,
          this,
          this.owner);
    };
  };
};
