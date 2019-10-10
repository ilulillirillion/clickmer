const ActorStatistic = require('../classes/ActorStatistic.js');


class ActorProficiency extends ActorStatistic {
  
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


};

module.exports = ActorProficiency;
