import Thing from '../classes/Thing.js';
import ActorStatistic from '../classes/ActorStatistic.js';
import HungerActorStatistic from '../classes/HungerActorStatistic.js';
import IdleActivity from '../classes/IdleActivity.js';
//import generateRandomName from '../functions/generateRandomName.js';


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
  /*
  constructor(args={
    'uuid': null,
    'name': null,
    'statistics': {
      'energy': {
        'max': 100,
        'current': 100
      },
      'health': {
        'max': 100,
        'current': 100
      },
      'hunger': {
        'max': 100,
        'current': 100
      }
    }
      }) {
  */
  constructor(args = Actor.default_args) {
    super();
    console.debug(`Instantiating Actor <${this.uuid}>.`);
    //let default_args = Actor.default_args;

    //this.statistics = args.statistics;

    //this.status = 'healthy';  

    // Name. If a name is not explicitly given, generate a random one.
    let name = args.name;
    if (!name) {
      //console.debug(`Empty or invalid name <${name}> given for <${this.uuid}>, generating a random name.`);
      name = this.generateRandomName();
      console.debug(`Generated random name <${name}> for <${this.uuid}>.`);
    };
    this.name = name;
    console.debug(`<${this.uuid}> name set to <${this.name}>.`);

    // If no name was specified, generate a random one
    /*
    this.name = args['name'];
    if (this.name == null) { 
      console.debug(`Generating random name for <${this.uuid}>.`);
      let name = this.generateRandomName();
      this.name = name;
    };
    console.debug(`<${this.name}> set to <${this.name}>.`);
    */

    /*
    let statistics = {
      'health': new ActorStatistic(this),
      'hunger': new HungerActorStatistic(this),
      'energy': new ActorStatistic(this)
    }; 
    //this.new_statistics = new_statistics;
    this.statistics = statistics;
    */

    this.last_status = null;

    // Statistics.
    this.statistics = args.statistics;
    console.debug(`<${this.uuid}> statistics set to <${this.statistics}>.`);
    /*
    this.statistics = args.statistics;
    if (!this.statistics) {
      let default_statistics = default_args.statistics;
      console.debug(`Empty or invalid statistics <${this.statistics}> given for <${this.uuid}>, using default statistics <${default_statistics}> instead.`);
      this.statistics = default_statistics;
    };
    */

    // Hunger listener.
    /*
    let self = this;
    this.statistics.hunger['listener'] = function() {
      console.log(`Running <${this.uuid}>'s hunger update listener`);
      if (self.statistics.hunger['current'] == 0) {
        self.die();
      }
    }
    */

    /*
    // Energy listener.
    this.statistics.energy['listener'] = function() {
      if (self.statistics.energy['current'] <= self.energy_halt_point ||
          self.statistics.energy['current'] == 0) {
        self.activity.name = 'sleep';
      };
    };
    */

    /*
    // Health listener.
    this.statistics.health['listener'] = function() {
      if (self.statistics.health['current'] == 0) {
        self.die();
      };
    };
    */


    //if (this.id == null) { this.uuid = `actor_${uuidv4()}` };


    this.activity = new IdleActivity(this);    


    //this.activity = null;
    //this.activity = 'idle';
    //this.activity_steps = 0;

    //let actor_element = this.generateElement();
    //document.getElementById('population_tab').appendChild(actor_element);
    //this.buildPopulantElement();
    //let populant_pane = this.createPopulantPane();
    //document.appendChild(populant_pane);
    //this.updatePopulationPanes();

    //this.dom.population_tab_populant_pane = 
    //    createPopulationTabPopulantPaneElement();

    //this.populant_panes = createPopulantPanes();

    /*
    let tick_listener = function() {
      self.activity.tick()
    };
    */ 


  }


  get status() {
    console.debug(`Getting <${this.class_name}> <${this.uuid}>'s status.`);
    //let old_status = this.status;
    let old_status = this.last_status;
    let status = 'healthy';
    // Can't come back from the dead.
    //console.warn(`status: <${status}>.`);
    if (old_status == 'dead') {
      console.debug(`Setting <${this.uuid}>'s status to dead because it was dead last time it was checked.`);
      //this.statistics.health.current = 0;
      //this.statistics.energy.current = 0;
      //this.statistics.hunger.current = 0;
      status = 'dead'
      //console.warn(`status2: <${status}>.`);
    };
    if (this.statistics.hunger.current <= 0) {
      console.debug(`Setting <${this.uuid}>'s status to dead because it's hunger is 0 or lower.`);
      //if (old_status != 'dead') {
      //  this.die();
      //};
      //this.die();
      //return 'dead';
      status = 'dead';
      //console.warn(`status: <${status}>.`);
    };
    old_status = status;
    //console.warn(`status: <${status}>.`);
    return status;
  };
  

  /*
  set hunger(value) {
    console.debug(`Setting <${this.class_name}> <${this.uuid}>'s hunger to <${value}>.`);
  */
    

  tick() {
    console.debug(`Ticking <${this.class_name}> <${this.uuid}>.`);
    //this.updateStatistic('hunger', -1);
    //this.statistics.hunger.current -= 1;
    //this.statistics.hunger.add(-1);
    this.updateStatistic('hunger', -1);
    //return this.state;
  };


  /*
  tickActivityEffects() {
    if (this.activity != null) {
      let activity = runtime_data.activities[this.activity.name];
      let effects = activity.sequences[this.activity.sequence];
      for (var i=0; i < effects.length; i++) {
        let effect = effects[i];
        effect(activity, this);
      };
    };
  };
  */


  createPopulationTabPopulantPaneElement() {
    // Get a pane element template from the Pane class
    let populant_pane_args = {
      'name': this.name,
      'uuid': this.uuid
    };
    let populant_pane = Pane.createPaneElement(populant_pane_args);

  };
    
    
    


  createPopulantPane(id_suffix='') {
    console.debug(`Adding populant: <${this.name}> (<${this.uuid}>).`);


    let populant_element_pane = document.createElement('div');
    populant_element_pane.setAttribute('id', `${this.uuid}_populant_pane${id_suffix}`);
    populant_element_pane.classList.add('populant_pane');

    // Get a simple base element from the populant's own method.
    let populant_element = this.createSimpleElement(`${id_suffix}`);
    populant_element_pane.appendChild(populant_element);

    // Create an activity progress bar element
    let activity_progress_bar = document.createElement('div');
    activity_progress_bar.setAttribute('id', `${this.uuid}_activity_progress_bar${id_suffix}`);
    activity_progress_bar.classList.add(`activity_progress_bar`);
    populant_element_pane.appendChild(activity_progress_bar);

    // Create an activity progress bar fill element
    let activity_progress_bar_fill = document.createElement('div');
    activity_progress_bar_fill.setAttribute('id', `${this.uuid}_activity_progress_bar_fill${id_suffix}`);
    activity_progress_bar_fill.classList.add(`activity_progress_bar_fill${id_suffix}`);
    activity_progress_bar_fill.style.width = '0%';
    activity_progress_bar.appendChild(activity_progress_bar_fill);

    // Add a click handler to expand and hide the div
    let self = this;
    populant_element_pane.addEventListener('click', function(e) {
      console.debug(`<${self.name}> populant pane clicked.`);
      let target_id = e.target.getAttribute('id');
      console.debug(`Populant pane click target id: ${target_id}`);
      if (target_id == `${self.uuid}${id_suffix}` ||
          target_id == `${self.uuid}_image${id_suffix}` ||
          target_id == `${self.uuid}_text_span${id_suffix}`) {
        console.debug(
            `Stopping unintended click on <${self.name}> populant pane.`);
        return;
      };
      populant_element_pane.classList.toggle('populant_pane_expanded');
    });
    return populant_element_pane;
  };

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
    /*
    if (statistic.hasOwnProperty('listener')) {
      statistic['listener']();
    };
    */
    //this.updateStatus
  }

  //generateElement(id_suffix='', expandable=true) {
  createSimpleElement(id_suffix='') {
    /* Creates a new element to represent the octopus in population view. The
    element ID should be equal to the octopus's UUID, and the element
    should have a tooltip displaying details. */

    console.log(`Making entity element with suffix: <${id_suffix}>.`);

    // Creates the element root div.
    let entity_element = document.createElement('div');
    let entity_element_id = `${this.uuid}${id_suffix}`;
    entity_element.setAttribute('id', entity_element_id);
    entity_element.classList.add('entity_element');


    // Creates an image which represents the octopus.
    let entity_element_image = document.createElement('img');
    let entity_element_image_id = `${entity_element_id}_image`;
    entity_element_image.setAttribute('id', entity_element_image_id);
    entity_element_image.setAttribute('src', 'octopus.png');
    entity_element_image.style.height = '16px';
    entity_element_image.style.width = '16px';
    // Makes the element clickable.
    entity_element_image.addEventListener('click', function() {
      console.log('click test success');
      game_data['assigning'] = this.uuid;
    });
    // Appends to the octopus element root.
    entity_element.appendChild(entity_element_image);

    // Creates a span for element text.
    let entity_element_text_span = document.createElement('span');
    let entity_element_text_span_id = `${entity_element_id}_text_span`;
    entity_element_text_span.setAttribute(
        'id', entity_element_text_span_id);
    console.log(
        `entity_element_text_span_id: <${entity_element_text_span_id}>`);
    entity_element_text_span.innerHTML = this.name;
    // Append to the octopus element root
    entity_element.appendChild(entity_element_text_span);

    // Creates a tooltip span.
    let entity_element_tooltip_text_span = document.createElement('span');
    entity_element_tooltip_text_span.innerHTML = `
        name: ${this.name}<br>
        hunger: ${this.statistics.hunger['current']}<br>`
    entity_element_tooltip_text_span.setAttribute(
        'id', `${entity_element_id}_tooltip_text`);
    entity_element_tooltip_text_span.classList.add('tooltiptext');
    // Appends tooltip text span and add tooltip class to octopus root element.
    entity_element.classList.add('tooltip');
    entity_element.appendChild(entity_element_tooltip_text_span);

    // onclick
    /*
    if (expandable) {
      entity_element.classList.add('populant_pane');
      entity_element.addEventListener('click', function(e) {
        if (e.target.getAttribute('id') != entity_element_id &&
            e.target.getAttribute('id') != entity_element_image_id &&
            e.target.getAttribute('id') != entity_element_text_span_id) {
          return;
        };
        entity_element.classList.toggle('populant_pane_expanded');
        entity_element_text_span.classList.toggle('populant_pane_title_text_expanded');
        //Game.updatePopulationTab();
      });
    };
    */




    return entity_element
  }



  updatePopulationPanes() {
    //let population_panes = document.getElementsByClassName(class_selector);
    //let population_panes = document.querySelectorAll(`[class$="population_pane"]`);
    let population_panes = document.getElementsByClassName('population_pane');
    console.debug(`Updating population panes <${population_panes}> (length: <${population_panes.length}>).`);
    for (let i=0; i < population_panes.length; i++) {
      let population_pane = population_panes[i];
      let populant_pane = population_pane.querySelector(`[id^="${this.uuid}"]`);
      console.debug(`Updating <${this.name}> on <${population_pane}>.`);
      if (populant_pane == null) {
        console.debug(`Creating populant pane for <${this.name}> on <${population_pane}>.`);
        let population_pane_id = population_pane.getAttribute('id');
        //if (population_pane.classList.contains('simple_population_pane')) {
        //  populant_pane = this.createSimpleElement(`_${population_pane_id}`);
        //} else {
        //  populant_pane = this.createPopulantPane(`_${population_pane_id}`);
        //};
        populant_pane = this.createPopulantPane(`_${population_pane_id}`);
        population_pane.appendChild(populant_pane);
      }
      let tooltip = population_pane.querySelector(`[id*="${this.uuid}"][id$="tooltip_text"]`);
      let tooltip_id = tooltip.getAttribute('id');
      console.debug(`Updating tooltip <${tooltip}> with id <${tooltip_id}>.`);

      //update(`${this.uuid}_tooltip_text`,
      update(tooltip_id,
          `
          name: ${this.name}<br>
          energy: ${this.statistics.energy.current}/${this.statistics.energy.max}<br>
          health: ${this.statistics.health.current}/${this.statistics.health.max}<br>
          hunger: ${this.statistics.hunger.current}/${this.statistics.hunger.max}<br>
          `
      );
    };
  };

  updateActivityPopulationPanes() {
    let activity_population_panes = document.getElementsByClassName(
        'activity_population_pane');
    for (let i=0; i < activity_population_panes.length; i++) {
      let activity_population_pane = activity_population_panes[i];
      let populant_pane = activity_population_pane.querySelector(
          `[id^="${this.uuid}"]`);
      if (populant_pane == null) {
        let population_pane_id = activity_population_pane.getAttribute('id');
        //populant_pane = this.createPopulantPane(`_${population_pane_id}`);
        populant_pane = this.createSimpleElement(`_${population_pane_id}`);

        populant_pane.addEventListener('click', function() {
          console.log('worker clicked!');
          if (game_data.population[i].activity == null ||
              game_data.population[i].activity.name !=
                  activity_element_text_span.innerHTML) {
            //game_data.population[i].activity = activity_element_text_span.innerHTML;
            let _activity = {
              'name': 'hunt_prey',
              //'sequence': 1,
              'step': 1
            };
            game_data.population[i].activity = _activity;
          } else {
            game_data.population[i].activity = null;
          };
        });



        activity_population_pane.appendChild(populant_pane);
      };
      let tooltip = activity_population_pane.querySelector(
          `[id*="${this.uuid}"][id$="tooltip_text"]`);
      let tooltip_id = tooltip.getAttribute('id');
      update(tooltip_id,
          `
          name: ${this.name}<br>
          energy: ${this.statistics.energy.current}/${this.statistics.energy.max}<br>
          health: ${this.statistics.health.current}/${this.statistics.health.max}<br>
          hunger: ${this.statistics.hunger.current}/${this.statistics.hunger.max}<br>
          `
      );
    };
  };



  generateRandomName() {
    console.log('generating a random name');
    let names = ['bob', 'emily', 'jon', 'ashley', 'justin', 'sara', 'ed'];

    let random_index = Math.floor(Math.random() * names.length);
    return names[random_index];

  }

  die() {
    console.debug(`<${this.uuid}> has died.`);
    //this.dead = true;
    this.status = 'dead';
  };

  /*
  die() {
    game_data.population.splice(game_data.population.findIndex(populant => populant.uuid == this.uuid), 1);
    document.getElementById(this.uuid).remove();
  }
  */

}
