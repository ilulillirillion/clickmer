// vim: set ft=javascript:

export default class Client {
  // TODO: handle uuid and name.
  constructor(
      { uuid = null, name = null, player = null, controller = null } =
      { uuid: null, name: null, player: null, controller: null }) {
    console.debug('Constructing a new Client.', arguments);

    this.player = player;

    this.controller = controller;
    if (!this.controller) { this.controller = new Controller() }

  }
};
