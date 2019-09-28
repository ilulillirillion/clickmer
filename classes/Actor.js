import Thing from '../classes/Thing.js';


export default class Actor extends Thing {
  static default_args = {
    'uuid': null,
    'name': null,
    'statistics': {
      'energy': {
        'maximum': 100,
        'minimum': 0,
        'current': 100
      },
      'health': {
        'maximum': 100,
        'minimum': 0,
        'current': 100
      },
      'hunger': {
        'maximum': 100,
        'minimum': 0,
        'current': 100
      }
    }
  };
  constructor(args = Actor.default_args) {
    super();
    console.debug(`Instantiating Actor <${this.uuid}>.`);

    // Name. If a name is not explicitly given, generate a random one.
    let name = args.name;
    if (!name) {
      name = this.generateRandomName();
      console.debug(`Generated random name <${name}> for <${this.uuid}>.`);
    };
    this.name = name;
    console.debug(`<${this.uuid}> name set to <${this.name}>.`);

    this.last_status = null;

    // Statistics.
    this.statistics = args.statistics;
    console.debug(`<${this.uuid}> statistics set to <${this.statistics}>.`);

    //this.activity = new IdleActivity(this);
    this.activity = 'idle';

  }


  get active() {
    console.debug(`Getting <${this.class_name}> <${this.uuid}>'s active state.`);
    let active = true;
    if (this.status.health == 'dead') {
      active = false;
    };
    console.debug(`Returning <${active}> for <${this.class_name}> <${this.uuid}>'s active state.`);
    return active;
  };


  get status() {
    console.debug(`Getting <${this.class_name}> <${this.uuid}>'s status.`);

    let status = {};

    let old_status = this.last_status;
    status.health = 'healthy';
    // Can't come back from the dead.
    if (old_status != null && old_status.health == 'dead') {
      console.debug(`Setting <${this.uuid}>'s status to dead because it was dead last time it was checked.`);
      status.health = 'dead'
    };
    if (this.statistics.hunger.current <= 0) {
      console.debug(`Setting <${this.uuid}>'s status to dead because it's hunger is 0 or lower.`);
      status.health = 'dead';
    };
    old_status = status;
    return status;
  };
  

  tick() {
    console.debug(`Ticking <${this.class_name}> <${this.uuid}>.`);
    this.updateStatistic('hunger', -1);
  };


  /*
  updateActivityProgressBar() {
    if (this.activity == null) {
      console.debug(
          `Not updating ${this.name}'s activity progress bar because ` +
          `their activity is null.`);
      return;
    };
    // A return step function will be built in after activity refactor, for
    // now testing with hardcoded value.
    let total_steps = 100;
    // This should map to total step, but waiting for activity refactor.
    let steps = this.activity.subsequence_step;
    console.debug(`Activity progress bar total steps: <${total_steps}> ` +
                  `(<${this.name}>'s steps: <${steps}>).`);
    let completion_percentage =
        Math.round((steps / total_steps) * 100);
    console.debug('Activity progress bar completion percentage: ' +
                  `<${completion_percentage}>.`);
    let activity_progress_bar_fill = document.getElementById(
        `${this.uuid}_activity_progress_bar_fill_population_pane_population_tab`);
    activity_progress_bar_fill.style.width = `${completion_percentage}%`;

  };
  */

  updateStatistic(statistic, delta) {
    console.debug(`Adding <${delta}> to <${this.uuid}>'s <${statistic}> statistic.`);
    statistic = this.statistics[statistic]
    statistic['current'] += delta;
    if (statistic['current'] > statistic['maximum']) {
      statistic['current'] = statistic['maximum'];
    }
    else if (statistic['current'] < statistic['minimum']) {
      statistic['current'] = statistic['minimum'];
    };
  }


  generateRandomName() {
    console.log('generating a random name');
    let names = ['bob', 'emily', 'jon', 'ashley', 'justin', 'sara', 'ed'];
    if (this.sex == 'female') {
      console.debug(`Assigning a female name to <${this.class_name}> <${this.uuid}> because they are female (<${this.sex}>.`);
      names = [ 
          // HP names
          'hermoine',
          'ginny',
          'cho',
          'fleur',
          'minerva',
          'bellatrix',
          // Dragonball
          'chi chi',
          'bulma',
          'videl',
          // Zelda
          'tetra',
          'zelda',
          'midna',
          // Mario
          'peach',
          'daisy',
          // Exile
          'jenneke',
          'adriana',
          'erika',
          // PD
          'joanna',
          'cassandra',
          // Goldeneye
          'natasha',
          // LOTR
          'galadriel',
          // GOT
          'catelyn',
          'sansa',
          'arya',
          'cersei',
          'missandei',
          'daenerys',
          'asha',
          'brienne',
          // Megaman
          'roll',
          // Donkey Kong
          'dixie',
          'candy',
      ];
    } else {
      names = [ 
        // HP names
        'harry',
        'ron',
        'albus',
        'severus',
        'hagrid',
        'tom',
        // Dragonball
        'goku',
        'gohan',
        'vegeta',
        'krillin',
        'picollo',
        'frieza',
        // Zelda
        'link',
        'gannon',
        // Mario
        'mario',
        'luigi',
        'wario',
        'waluigi',
        // Perfect Dark
        'elvis',
        'jonathan',
        // Goldeneye
        'james',
        'alec',
        // Lotr
        'bilbo',
        'frodo',
        'gandalf',
        'legolas',
        'aragorn',
        'sauron',
        'gimli',
        'saruman',
        'elrond',
        // GOT
        'bran',
        'jon',
        'eddard',
        'rob',
        'robert',
        'jaime',
        'jorah',
        'drogo',
        'joffrey',
        'loras',
        'kevin',
        'tyrion',
        'tywin',
        'varys',
        'peter',
        // Megaman
        'rock',
        // Donkey Kong
        'diddy',
        'donkey',
      ];
    };
    let random_index = Math.floor(Math.random() * names.length);
    return names[random_index];

  }

  die() {
    console.debug(`<${this.uuid}> has died.`);
    //this.dead = true;
    this.status = 'dead';
  };

  get doable_activities() {
    let doable_activities = Actor.activities;
    return doable_activities;
  };

  _study_environment() {
    console.debug(`<${this.uuid}> is studying the environment.`);
  };

  static activities = [
    'study environment'
  ];

};
