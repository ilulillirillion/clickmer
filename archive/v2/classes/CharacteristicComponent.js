import SkillComponent from '../classes/SkillComponent.js';


/**
 * Currently the only functional difference between a characteristic and a
 * skill is that characteristics are initialized with a level of '1' by
 * default (as opposed to '0' for skills);
 */
export default class CharacteristicsComponent extends SkillComponent {

  constructor({ owner = null, uuid = null, name = 'characteristic',
                level = 1, experience = 0, experience_to_next_level = 0, 
                maximum = 0, minimum = 0 } =
              { owner: null, uuid: null, name: 'characteristic',
                level: 1, experience: 0, experience_to_next_level: 0,
                maximum: 0, minimum: 0 }) {
    super({ owner, uuid, name, level, maximum, minimum });
  };

};
