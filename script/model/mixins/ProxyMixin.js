/**
 * ProxyMixin is used to override get and set.
 */
let ProxyMixin; // Initial declaration to make it hoistable for export.
export default ProxyMixin = Base => class extends Base {
  constructor() {
    super();
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
        //console.debug(`Setting <${target.uuid}>'s <${name}> to <${value}>.`,
        //    target, name, value);
        target[name] = value;
        return true;
      }

    });
  };
};      
