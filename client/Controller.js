// vim: set ft=javascript:

import ClientThing from './ClientThing.js';
import KeyboardHandler from './KeyboardHandler.js';

export default class Controller extends ClientThing {
  constructor(
      { uuid = null, name = 'controller', input_handlers = [ new KeyboardHandler() ], player = null } =
      { uuid: null, name: 'controller', input_handlers: [ new KeyboardHandler() ], player: null }) {
    console.debug('Constructing a new Controller', arguments);
    super({ uuid, name });

    this.input_handlers = input_handlers;

    this.player = player;

  }

  

}
