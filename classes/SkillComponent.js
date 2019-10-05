import StatisticComponent from '../classes/StatisticComponent.js';


export default class SkillComponent extends StatisticComponent {
  
  constructor({ owner = null, uuid = null, name = 'statistic',
                level = 0, experience = 0, experience_to_next_level = 0,
                maximum = 0, minimum = 0 } = 
              { owner: null, uuid: null, name: 'statistic', 
                level: 0, experience: 0, experience_to_next_level: 0 }) {
    super({ owner, uuid, name, current: level, maximum, minimum });

    this._level = level;
    this._experience = experience;
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
    this.write(`${this.owner.name}'s ${this.name} has leveled up!`);
    this.level += 1;
  };

};
