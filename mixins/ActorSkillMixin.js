export const ActorSkillMixin = Base => class extends Base { 
  constructor({ name = 'skill' } = { name: 'skill' }) {
    super({ name: name });

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
      console.debug(`<${this.uuid}>'s <${this.name}> skill has leveled up.`);
      this.level += 1;
    }
  }

  get level() {
    return this.current;
    //return this._level;
  };

  set level(level) {
    //this._level = level;
    this.current = level;
  };

};
