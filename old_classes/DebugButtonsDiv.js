import WrappedDiv from '../classes/WrappedDiv.js';


export default class DebugButtonsDiv extends WrappedDiv {
  constructor(buttons) {
    console.debug(`Constructing a new DebugButtonsDiv with buttons <${buttons}>.`);
    super();
    console.debug(`Constructing <${this.uuid}>.`);

    this.buttons = buttons;
    for (let button of this.buttons) {
      console.debug(`Appending <${button.uuid}> element <${button.element}> to <${this.uuid}> element <${this.element}>.`);
      this.element.appendChild(button.element);
    };

  };

  tick() {
    console.debug(`Ticking <${this.uuid}>.`);
    for (let button of this.buttons) {
      button.tick();
    };
  };


};
