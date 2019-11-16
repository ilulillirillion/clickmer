// vim: set ft=javascript:

/**
 * file: clickmer/client/ServerManaged.js
 * author: zolvaring
 * email: zolvaring@gmail.com
 * reference: https://github.com/zolvaring/clickmer
 **
 * Provides the ServerManaged mixin class.
 * ServerManaged objects have a delta namespace.
 */
const ServerManaged = Base => class extends Base {


  constructor(...args) {
    
    super(...args);

    /*
    return new Proxy(this, {

      set(target, name, value) {
        target.delta[name] = value;
        return true;
      }

    });
    */

  }

  update(delta) {
    for (let [key, value] of Object.entries(delta)) {
      this[key] = value;
    }
  }

}

export default ServerManaged;
