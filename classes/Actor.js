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
    console.debug(`Instantiating Actor <${this.uuid}>.`);

    // Name. If a name is not explicitly given, generate a random one.
    if (!name) {
      name = this.generateRandomName();
      console.debug(`Generated random name <${name}> for <${this.uuid}>.`);
    };
    this.name = name;
    console.debug(`<${this.uuid}> name set to <${this.name}>.`);

    this.last_status = null;

    this.characteristics = new ActorCharacteristics({ actor: this });

    // Statistics.
    let statistics = new ActorStatistics(this);
    this.statistics = statistics;
    this.statistics.fill();

    console.debug(`<${this.uuid}> statistics set to <${this.statistics}>.`);

    this.activity = Actor.getActivity('rest');

    let skills = new ActorSkills({ actor: this });
    this.skills = skills;

    this.write(`${this.name} has joined the colony!`);

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
    super.tick();
    //this.statistics.hunger.update(-1);
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
    this.write(`${this.name} has died!`);
    //this.dead = true;
    this.status = 'dead';
  };


  get doable_activities() {
    console.debug(`Getting <${this.uuid}>'s doable activities.`);
    let doable_activities = [];
    for (let activity of Actor.activities) {
      console.debug(`Checking if <${this.uuid}> can do <${activity.name}> based on <${activity.requirements}>.`);
      let doable = true;
      for (let [skill_name, required_level] of Object.entries(activity.requirements)) {
        if (  !(skill_name in this.skills) || 
              this.skills[skill_name].level < required_level ) {
          console.debug(`<${this.uuid}> cannot do <${activity.name}> because theyre <${skill_name}> skill does not meet requirement of <${required_level}> (<${this.skills[skill_name]}>).`);
          doable = false;
        };
      };
      if (doable) {
        doable_activities.push(activity);
      };
    };
    return doable_activities;
  };

  //levelUp(skill_or_attribute) {


  getActivity(name) {
    let activity = Actor.getActivity(name);
    return activity;
  };

  static getActivity(name) {
    console.debug(`Getting Actor activity by name <${name}>.`);
    let activity = Actor.activities.find(activity => activity.name === name);
    console.debug(`Returning Actor activity <${activity.name}>.`);
    return activity;
  };

  static activities = [
    //new IdleActivity()
    //IdleActivity,
    RestActivity,
    StudyEnvironmentActivity,
    HuntPreyActivity
  ];

};
