export const ProxyMixin = Base => class extends Base {
  constructor() {
    super();
    return new Proxy(this, {
      set(target, name, value) {
        console.debug(`Setting <${target.uuid}>'s <${name}> to <${value}>.`);
        target[name] = value;
        return true;
      }
    });
  }
}
