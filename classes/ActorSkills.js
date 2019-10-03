import Thing from '../classes/Thing.js';
import ActorSkill from '../classes/ActorSkill.js';


export default class ActorSkills extends Thing {
  static skills = [
    'fighting',
    'hunting',
    'survivalism',
    'tracking'
  ];
  constructor({ actor = actor }) {
    super();

    this.all = [];
    for (let skill_name of ActorSkills.skills) {
      let skill = new ActorSkill({ name: skill_name, actor: actor });
      this[skill_name] = skill;
      this.all.push(skill);
    };

    /*
    // Fighting.
    this.fighting = new ActorSkill('fighting');

    // Hunting.
    this.hunting = new ActorSkill('hunting');

    // Survivalism.
    this.survivalism = new ActorSkill('survivalism');

    // Tracking.
    this.tracking = new ActorSkill('tracking');
    */

  }

  
}
