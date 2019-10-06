import WrappedDiv from '../classes/WrappedDiv.js';


export default class FillBar extends WrappedDiv {
  constructor() {
    super();
    this.element.classList.add('fill');
    //this.element.setAttribute('id', `${this.uuid}`);
    this.fill = 0;
  };


  tick(fill = this.fill) {
    console.debug(`Ticking <${this.uuid}> with fill <${fill}>.`);
    this.element.style.width = `${fill}%`;
  };
    

  getFill(number, max) {
    let fill_percentage = Math.round((number / max) * 100);
    console.debug(`Returning fill percentage <${fill_percentage}> from <${number}>/<${max}>.`);
    return fill_percentage;
  };
};
