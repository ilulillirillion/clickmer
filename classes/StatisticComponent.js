import Component from '../classes/Component.js';


export default class StatisticComponent extends Component {

  constructor({ owner = null, uuid = null, name = 'statistic', 
                current = 0, maximum = 0, minimum = 0 } = 
              { owner: null, uuid: null, name: 'statistic', 
                current: 0, maximum: 0, minimum: 0 }) {
    super({ owner, uuid, name });    
    
    this.name = name;

    this._current = current;
    this.maximum = maximum;
    this.minimum = minimum;

  };

  get current() {
    return this._current;
  };

  set current(current) {
    if (current > this.maximum) { current = this.maximum };
    if (current < this.minimum) { current = this.minimum };
    this._current = current;
  };

  levelUp() {
    this.current += 1;
  };

  fill() {
    this.current = this.maximum;
  };

};
