export default class Reactor() {

  constructor() {
    this.events = {};
  };

  registerEvent(event_name) {
    var _event = new GameEvent(event_name);
    this.events[event_name] = _event;
  };

  dispatchEvent(event_name, event_parameters) {
    this.events[event_name].callbacks.forEach(function(callback) {
      callback(event_parameters);
    });
  };

  addEventListener(event_name, callback) {
    this.events[event_name].registerCallback(callback);
  };

};

