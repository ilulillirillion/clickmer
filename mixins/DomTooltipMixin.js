import TooltipSpan from '../classes/TooltipSpan.js';


export const DomTooltipMixin = Base => class extends Base {
  constructor() {
    super();
    console.debug('Executing DomTooltipMixin constructor.');

    this.tooltip = new TooltipSpan();
    this.element.classList.add('has_tooltip');
    this.element.appendChild(this.tooltip.element);
    console.debug(`<${this.uuid}> tooltip set to <${this.tooltip}>.`);

    console.debug('Finished executing DomTooltipMixin constructor.');
  }
};


  //createTooltipElement() {
  //  console.debug(`<${this.uuid}> creating new tooltip element.`);
  //  let tooltip =
