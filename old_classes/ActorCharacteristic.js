import { ActorSkillMixin } from '../mixins/ActorSkillMixin.js';
import ActorStatistic from '../classes/ActorStatistic.js';


export default class ActorCharacteristic extends ActorSkillMixin(ActorStatistic) {
  constructor({ name = 'characteristic', value = 1, actor } = {}) {
    super({ name: name, actor: actor});
    this.maximum = 100;
    this.current = value;
    this.minimum = 1;
  };
};
