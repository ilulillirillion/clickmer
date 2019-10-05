import ActorStatistic from '../classes/ActorStatistic.js';


export default class ActorSkill extends ActorStatistic {
  
  constructor({ name = 'statistic', current = 0, maximum = 0, minimum = 0 } = 
              { name: 'statistic', current: 0, maximum: 0, minimum: 0 }) {
    super({ name: name, current: current, maximum: maximum, 
            minimum: minimum });

    let level = 0;
    this._level = level;

    let experience = 0;
    this._experience = experience;

    let experience_to_next_level = 10;
    this.experience_to_next_level = experience_to_next_level;

  };

  get experience() {
    return this._experience;
  };

  set experience(value) {
    this._experience = experience;
    if (this.experience >= this.experience_to_next_level) {
      this.levelUp();
    };
  };

  get level() {
    return this.current;
  };

  set level(value) {
    this.current = level;
    let experience_requirements_addition = Math.ceil((
        this.experience_to_next_level + (this.experience_to_next_level * 0.10)
    ));
  };

  levelUp() {
    //this.write(`${this.owner.name}'s ${this.name} has leveled up!`);
    this.level += 1;
  };

};
