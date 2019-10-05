export const ActorSkillMixin = Base => class extends Base { 
  constructor({ name = 'skill', actor } = { name: 'skill', actor }) {
    super({ name: name, actor: actor });

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

  set experience(experience) {
    console.debug(`Increasing <${this.uuid}>'s experience of <${this.experience}> by <${experience}>.`);
    this._experience = experience;
    if (this.experience >= this.experience_to_next_level) {
      console.debug(`<${this.uuid}>'s <${this.name}> skill has leveled up, adding 1 to current level <${this.level}>.`);
      console.info(this);
      //this.level += 1;
      this.levelUp();
    }
  }

  get level() {
    return this.current;
    //return this._levek;
  };

  set level(level) {
    //console.debug(`Setting <${this.uuid}>'s level to <${level}>.`);
    //this._level = level;
    this.current = level;
    console.debug(`Set <${this.uuid}>'s level to <${this.level}> (<${this.current}> <${level}>).`);
    let experience_requirements_addition = Math.ceil((this.experience_to_next_level + (this.experience_to_next_level * 0.10)));
    this.experience_to_next_level += experience_requirements_addition;
  };

  levelUp() {
    this.write(`${this.actor.name}'s ${this.name} has leveled up!`);
    //this.current += 1;
    this.level += 1;
  };

};
