import TooltipSpan from '../classes/TooltipSpan.js';


export const DomTooltipMixin = Base => class extends Base {
  constructor() {
    super();
    console.debug('Executing DomTooltipMixin constructor.');

    this.tooltip = new TooltipSpan();
    this.element.classList.add('has_tooltip');
    this.element.appendChild(this.tooltip.element);
    console.debug(`<${this.uuid}> tooltip set to <${this.tooltip}>.`);

    let self = this;
    let update_tooltip_tick_listener = function() {
      self.tooltip.span_contents = self.tooltip_span_contents;
      self.tooltip.tick();
    };
    this.tick_listeners.push(update_tooltip_tick_listener);


    console.debug('Finished executing DomTooltipMixin constructor.');
  };

  get tooltip_span_contents() {
    let text = '';
    return text;
  };

};
