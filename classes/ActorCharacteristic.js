import ActorSkill from '../classes/ActorSkill.js';


/**
 * Currently the only functional difference between a characteristic and a
 * skill is that characteristics are initialized with a level of '1' by
 * default (as opposed to '0' for skills);
 */
export default class ActorCharacteristics extends ActorSkill {

  constructor({ name = 'characteristic', level = 1, 
                maximum = 0, minimum = 0 } =
              { name: 'characteristic', level: 1,
                maximum: 0, minimum: 0 }) {
    super();
  };

};
