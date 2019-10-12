export default class GameEvent {
  constructor(name) {
    this.name = name;
    this.callbacks = [];
  };

  registerCallback(callback) {
    this.callbacks.push(callback);
  };
};
