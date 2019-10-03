import Thing from '../classes/Thing.js';
//import IdleActivity from '../classes/IdleActivity.js';
import RestActivity from '../classes/RestActivity.js';
import StudyEnvironmentActivity from '../classes/StudyEnvironmentActivity.js';
import HuntPreyActivity from '../classes/HuntPreyActivity.js';
import ActorCharacteristics from '../classes/ActorCharacteristics.js';
import ActorStatistics from '../classes/ActorStatistics.js';
import ActorSkills from '../classes/ActorSkills.js';


export default class Actor extends Thing {
  constructor(
      { 
        uuid = null, name = null,
      } =
      {
        uuid: null, name: null,
      }) {
    super();

    // Name. If a name is not explicitly given, generate a random one.
    if (!name) {
      name = this.generateRandomName();
    };
    this.name = name;

    // Last status assignment.
    this.last_status = null;

    // Characterstics assignemnt.
    this.characteristics = new ActorCharacteristics({ actor: this });

    // Statistics assignment.
    let statistics = new ActorStatistics(this);
    this.statistics = statistics;
    this.statistics.fill();

    // Activity assignment.
    this.activity = Actor.getActivity('rest');

    // Skills assignment.
    let skills = new ActorSkills({ actor: this });
    this.skills = skills;

    // Write that a new populant has appeared.
    this.write(`${this.name} has joined the colony!`);

  }

  get active() {
    """ Check whether or not the actor is active or 'in play'. """
    let active = true;
    if (this.status.health == 'dead') {
      active = false;
    };
    return active;
  };


  get status() {
    let status = {};

    let old_status = this.last_status;
    status.health = 'healthy';
    // Can't come back from the dead.
    if (old_status != null && old_status.health == 'dead') {
      status.health = 'dead'
    };
    if (this.statistics.hunger.current <= 0) {
      status.health = 'dead';
    };
    old_status = status;
    return status;
  };
  

  tick() {
    super.tick();
    this.statistics.hunger.current -= 1;

    if (!this.sequence) {
      if (!this.activity.sequence) {
        this.activity.tick({actor: this});
        return true;
      } else {
        this.sequence = this.activity.sequence;
      };
    };
    this.sequence.tick(this);
    
  };


  get sequence_progression() {
    if (!this.sequence) {
      return null;
    };
    let sequence_progression = {
      'stage': this.sequence.stage,
      'steps': this.sequence.steps
    };
    return sequence_progression;
  };

  generateRandomName() {
    let names = ['bob', 'emily', 'jon', 'ashley', 'justin', 'sara', 'ed'];
    if (this.sex == 'female') {
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
    this.write(`${this.name} has died!`);
    this.status = 'dead';
  };


  get doable_activities() {
    let doable_activities = [];
    for (let activity of Actor.activities) {
      let doable = true;
      for (let [skill_name, required_level] of Object.entries(activity.requirements)) {
        if (  !(skill_name in this.skills) || 
              this.skills[skill_name].level < required_level ) {
          doable = false;
        };
      };
      if (doable) {
        doable_activities.push(activity);
      };
    };
    return doable_activities;
  };

  getActivity(name) {
    let activity = Actor.getActivity(name);
    return activity;
  };

  static getActivity(name) {
    let activity = Actor.activities.find(activity => activity.name === name);
    return activity;
  };

  static activities = [
    RestActivity,
    StudyEnvironmentActivity,
    HuntPreyActivity
  ];

};
