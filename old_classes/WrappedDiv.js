import WrappedElement from '../classes/WrappedElement.js';


export default class WrappedDiv extends WrappedElement {
  constructor() {
    console.debug('Constructing a new WrappedDiv.');
    super('div');
    console.debug(`Constructing <${this.log_name}>.`);
  };
};
