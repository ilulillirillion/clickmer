import ActorStatistic from '../classes/ActorStatistic.js';


export default class ActorProficiency extends ActorStatistic {
  
  constructor({ uuid = null, name = 'statistic',
                maximum = 100, minimum = 0, current = 0, 
                experience = 0, experience_to_next_level = 0 } =
              { uuid: null, name: 'statistic', 
                maximum: 100, minimum: 0, current: 0,
                experience: 0, experience_to_next_level: 0 }) {
    super({ uuid, name, current, maximum, minimum });

    //this.level = level;
    this._experience = experience;
    this._experience_to_next_level = experience_to_next_level;

  };

  /*
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
    this.write(`${this.owner.name}'s ${this.name} has leveled up!`);
    this.level += 1;
  };
  */

};
