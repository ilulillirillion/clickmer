import { ActorSkillMixin } from '../mixins/ActorSkillMixin.js';
import ActorStatistic from '../classes/ActorStatistic.js';


export default class ActorCharacteristic extends ActorSkillMixin(ActorStatistic) {
  constructor({ name = 'characteristic', actor } = {}) {
    super({ name: name, actor: actor});
    this.maximum = 100;
    this.current = 1;
    this.minimum = 1;
  };
};
