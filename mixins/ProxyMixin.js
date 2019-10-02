export const ProxyMixin = Base => class extends Base {
  constructor() {
    super();
    return new Proxy(this, {

      get(target, name) {
        let value = target[name];
        if (typeof(name) !== 'symbol') {
          console.debug(`Getting <${target.uuid}>'s <${name}> value (<${value}>).`);
        };
        return value;
      },

      set(target, name, value) {
        console.debug(`Setting <${target.uuid}>'s <${name}> to <${value}>.`);
        target[name] = value;
        return true;
      }
    });
  }
}
