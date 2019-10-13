// vim: set ft=javascript:


logger = require('./logger.js');


const ProxyMixin = Base => class extends Base {
  constructor(...args) {

    super(...args);

    return new Proxy(this, {

      /**
       *  Replicates the default get behavior.
       *  Only here for convenience of modifying.
       */
      get(target, name) {
        let value = target[name];
        return value;
      },

      /**
       * Logs all sets and then replicates default behavior.
       * Used only for debugging.
       */
      set(target, name, value) {
        logger.debug(`Setting <${target.uuid}>'s <${name}> to <${value}>.`,
            target, name, value);
        target[name] = value;
        return true;
      }    

    });
  };
};


module.exports = ProxyMixin;
