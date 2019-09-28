export default class DomObject {
  constructor(name) {
    this.element = null;
  }
  addDomObject(dom_object) {
    this[dom_object.name] = dom_object
    this.element.appendChild(dom_object)
  };
};
