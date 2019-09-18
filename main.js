function capitalizeString(string) {
  return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
};


class Game {

  static createGameDataShell() {
    let game_data_shell = {
      population: [],
      lastTick: Date.now()
    };
    return game_data_shell;
  };

  static addPopulant(populant) {
    console.debug(`Adding populant: <${populant.name}> (<${populant.uuid}>).`);

    game_data.population.push(populant);

    // Get a simple base element from the populant's own method.
    let populant_element = populant.createSimpleElement('_populant');
    // Add customizations.
    populant_element.classList.add('populant_pane');
    populant_element.addEventListener('click', function(e) {
      let target_id = e.target.getAttribute('id');
      if (target_id != `${populant.uuid}_populant` &&
          target_id != `${populant.uuid}_populant_image` &&
          target_id != `${populant.uuid}_populant_text_span`) {
        return;
      };
      populant_element.classList.toggle('populant_pane_expanded');
      let populant_element_text_span = document.getElementById(
          `${populant.uuid}_populant_text_span`);
      populant_element_text_span.classList.toggle(
          'populant_pane_title_text_expanded');
    });
    let population_tab = document.getElementById('population_tab');
    population_tab.appendChild(populant_element);
  };


  static buildRuntimeData() {
    let runtime_data = {};
    //runtime_data['activities'] = Game.buildActivities();
    //runtime_data['activities'] = Game.createActivities();
    runtime_data['background_music'] = null;
    return runtime_data;
  };
  
  static tryRandomTraveller() {
    
    let chance = 0.0001;
    // Increase chances
    if (game_data.population.length == 0) {
      chance += 0.1;
    }
    else if (game_data.population.length < 3) {
      chance += 0.05;
    };
    let random_number = Math.random();
    console.log(
        `Traveller gen (chance: ${chance}) dice rolled (<${random_number}>).`);
    if (random_number <= chance) {
      let human = new Human();
      game_data.population.push(human);
      updateEventLog(`${human.name} has arrived!`);
    };
  };

  /*
  static loadGameData() {
    // Loading the game is no different than loading a save
    game_data = Game.loadSavedData();
    return game_data;
  };
  */ 

  static loadSavedData() {
    console.log('Loading saved data');
    //let game_data = Game.buildGameData();
    console.log(localStorage.getItem('game_save_data'));
    if (localStorage.getItem('game_save_data') !== 'undefined' &&
        localStorage.getItem('game_save_data') != null) {
      let save_data = JSON.parse(localStorage.getItem('game_save_data'));
      if (typeof save_data === 'undefined' || save_data == null) {
        let save_data = {};
        return [ game_data, save_data ];
      };
      console.log(`save_data: <${save_data}>.`);
      //console.log(save_data['octopi']);
      //console.log(typeof save_data['octopi']);
      if (typeof save_data['population'] !== 'undefined') {
        console.log('Loading saved population');
        for (let i=0; i < save_data.population.length; i++) {
          let human = new Human(save_data.population[i]);
          console.log(`loaded human <${human}>`);
          game_data.population.push(human);
          //Game.addPopulant(human);
        }
      };
      if (typeof save_data['lastTick'] !== "undefined") {
        console.log('loading saved lastTick');
        game_data['lastTick'] = save_data.lastTick;
      };
    };
    //console.log(`Returning game_data: <${game_data}>`);
    //return game_data
  };


  static startAutosaveScheduler() {
    var saveGame = window.setInterval(function() {
      console.log('Autosaving.');
      localStorage.setItem('game_save_data', JSON.stringify(game_data))
    }, 15000);
  };


  static createMusicButton() {
    let music_button = document.createElement('button');
      music_button.setAttribute('id', 'music_button');
      music_button.innerHTML = 'Music';
      music_button.addEventListener('click', function() {
        console.log('music button clicked');
        console.log(runtime_data.background_music);
        if (typeof runtime_data.background_music === 'undefined' ||
            runtime_data.background_music == null) {
          console.log('Background music is undefined or null.');
          runtime_data.background_music = new Audio('aquatic_ambience.mp3');
          runtime_data.background_music.loop = true;
          runtime_data.background_music.play(); 
          return;
        }
          
        if (runtime_data.background_music.paused) {
          runtime_data.background_music.play()
        }
        else {
          runtime_data.background_music.pause()
        };
      });
      document.body.appendChild(music_button);
  };


  static playMusic() {
    let background_music = document.getElementById('background_music_audio');
    var background_music_promise = background_music.play();
    if (background_music_promise !== undefined) {
        background_music_promise.then(_ => {
            console.log('play started');
        }).catch(error => {
            console.log(`play error: <${error}>.`);
        });
    }
  }


  static createVolumeSlider() {
    // Add a volume slider
    let volume_slider = document.createElement('input');
    volume_slider.setAttribute('id', 'volume_slider');
    volume_slider.setAttribute('type', 'range');
    volume_slider.setAttribute('min', '0');
    volume_slider.setAttribute('max', '100');
    volume_slider.setAttribute('step', '1');
    volume_slider.addEventListener('input', function() {
      console.log('volume slider touched');
      setVolume(volume_slider.value);
    });
    volume_slider.addEventListener('change', function() {
      console.log('volume slider touched');
      setVolume(volume_slider.value);
    });
    document.body.appendChild(volume_slider);
  };


  static buildAudio() {
    Game.createMusicButton();
    Game.createVolumeSlider();
  };



  static createTab(tab_name) {
    console.log(`Creating tab <${tab_name}>.`);
    let tab = document.createElement('div');
    tab.setAttribute('id', `${tab_name}_tab`);
    document.body.append(tab);
    let tab_button = document.createElement('button');
    tab_button.setAttribute('id', `${tab_name}_button`);
    tab_button.innerHTML = `${capitalizeString(tab_name)} view`;
    tab_button.addEventListener('click', function() {
      showTab(`${tab_name}_tab`);
    });
    let navigation_div = document.getElementById('navigation_div');
    navigation_div.appendChild(tab_button);
  }


  static createColonyTab() {
    /*
    let colony_tab = document.createElement('div');
    colony_tab.setAttribute('id', 'colony_tab');
    document.body.append(colony_tab);
    let colony_tab_button = document.createElement('button');
    colony_tab_button.setAttribute('id', 'colony_tab_button');
    colony_tab_button.innerHTML = 'Colony View';
    colony_tab_button.addEventListener('click', showTab('colony_tab'));
    colony_tab.appendChild(colony_tab_button);
    */
    Game.createTab('colony');
  }

  static createPopulationTab() {
    console.debug('Creating population tab');
    /*
    let population_tab = document.createElement('div');
    population_tab.setAttribute('id', 'population_tab');
    document.body.append(population_tab);
    */
    Game.createTab('population');

    console.debug('Creating population tab inner elements');
    let populants_pane = Game.createPopulantsPane('_population_tab', false);
    let population_tab = document.getElementById('population_tab');
    population_tab.appendChild(populants_pane);
    
  }

  static createPopulantsPane(id_suffix='', populate=true) {
    let populants_pane = document.createElement('div');
    let populants_pane_id = `populant_pane${id_suffix}`;
    populants_pane.setAttribute('id', populants_pane_id);

    if (populate) {
      for (var i=0; i < game_data.population.length; i++) {
        let populant = game_data.population[i];
        let populant_element = populant.createSimpleElement(
            `_populants_pane${id_suffix}`);
        populants_pane.appendChild(populant_element);

      };
    };
    return populants_pane;
  };
    
    

  static createResearchTab() {
    /*
    let research_tab = document.createElement('div');
    research_tab.setAttribute('id', 'research_tab');
    document.body.append(research_tab);
    */
    Game.createTab('research');
  }

  static buildUI() {
    Game.createColonyTab();
    Game.createPopulationTab();
    Game.createResearchTab();
    Game.buildActivities();
    Game.buildAudio();
    showTab('colony_tab');
  }

  //static buildActivity(activity_name, tooltip_text) {
  //  createActivity(activity_name, tooltip_text);
  //  updateActivityElement(activity_name);
  //};  

  
  
  static buildActivities() {

    game_data.activities = [];
    
    //Game.buildActivity('hunt_prey', 'hunt nearby prey.');
    let _1 = function(activity, participant) {
      console.debug('test sequence 1');
    };
    let hunt_prey_sequences = {
      '1': {
        'steps': 100,
        'effects': _1 
      }
    };
    let hunt_prey_args = {
        'name': 'hunt_prey',
        'tooltip_text': 'hunt prey',
        'sequences': hunt_prey_sequences
    };
    let hunt_prey = new Activity(hunt_prey_args);

    game_data.activities.push(hunt_prey);
 
    //Game.updateActivityElement('hunt_prey');
    //game_data.activities = activities;

      
  };

  static updatePopulationTab() {
    console.debug('Updating population tab.');
    /*
    for (var i=0; i < game_data.population.length; i++) {
      let populant = game_data.population[i];
      if (populant.activity != null) {
        let populant_element = document.getElementById(populant.uuid);
        if (populant_element.classList.contains('populant_pane_expanded')) {
          console.debug('Updating expanded population pane');

          //FIXME: this will just keep recreating divs...
          let activity_progress_bar = document.createElement('div');
          activity_progress_bar.setAttribute('id', `activity_progress_bar_${populant.activity.name}_${populant.uuid}`);
          activity_progress_bar.classList.add('activity_progress_bar');
          populant_element.appendChild(activity_progress_bar);

          let activity_progress_bar_fill = document.createElement('div');
          activity_progress_bar_fill.setAttribute('id', `activity_progress_bar_fill_${populant.activity.name}_${populant.uuid}`);
          activity_progress_bar_fill.classList.add('activity_progress_bar_fill');
          activity_progress_bar.appendChild(activity_progress_bar_fill);
    
        }
        // If the populant pane is not expanded...
        else {
          let activity_progress_bar = document.getElementById(`activity_progress_bar_${populant.activity.name}_${populant.uuid}`);
          if (activity_progress_bar !== 'undefined' && 
              activity_progress_bar != null) {
            activity_progress_bar.remove();
          };
          let activity_progress_bar_fill = document.getElementById(`activity_prgoress_bar_${populant.activity.name}_${populant.uuid}`);
          if (activity_progress_bar !== 'undefined' &&
              activity_progress_bar != null) {
            activity_progress_bar_fill.remove();
          };
            
        };
    
      };
    };*/
  }; 
};


class Activity {

  constructor(args={}) {
    console.debug(`Creating activity with arguments: <${args}>.`);
    this.name = 'activity';
    if (args.name) {
      this.name = args.name;
    };
    this.tooltip_text = 'tooltip_text';
    if (args.tooltip_text) {
      this.tooltip_text = args.tooltip_text;
    };

    this.sequences = {};
    if (args.sequences) {
      this.sequences = args.sequences;
    };

    this.element_base_id = this.name;

    this.createElement();
  };

  createElement() {

    // Create a DOM element to represent the activity.
    let activity_element = document.createElement('div');
    let activity_element_id = `${this.element_base_id}_pane`;
    activity_element.setAttribute('id', activity_element_id);
    activity_element.classList.add('activity_pane');

    
    // Create and attach a span to act as inner text.
    let activity_element_text_span = document.createElement('span');
    let activity_element_text_span_id = `${activity_element_id}_text_span`;
    activity_element_text_span.setAttribute(
        'id', activity_element_text_span_id);
    activity_element_text_span.classList.add(
        `${activity_element_id}_title_text`);
    activity_element_text_span.innerHTML = `${this.name}`;
    activity_element.appendChild(activity_element_text_span);


    // Create a tooltip text span
    let activity_element_tooltip_text = document.createElement('span');
    activity_element_tooltip_text.setAttribute(
        'id', `${activity_element_id}_tooltip_text`);
    activity_element_tooltip_text.classList.add('tooltiptext');
    activity_element_tooltip_text.innerHTML = this.tooltip_text;
    activity_element.classList.add('tooltip');
    activity_element.appendChild(activity_element_tooltip_text);


    activity_element.addEventListener('click', function(e) {

      if (e.target.getAttribute('id') != activity_element_id &&
          e.target.getAttribute('id') != activity_element_text_span_id) {
        return;
      }
      activity_element.classList.toggle('activity_pane_expanded');
      activity_element_text_span.classList.toggle(
          'activity_pane_title_text_expanded');
      console.log(
          `activity_element_text_span className: \
          ${activity_element_text_span.className}`);
      Game.updateActivityElement(activity_element_id);

    });

    document.getElementById('colony_tab').appendChild(activity_element);
    //Game.updateActivityElement('hunt_prey_pane');
  };



  ///////////
  updateActivityElement() {
    let activity_element_id = `${this.element_base_id}_pane`;
    let activity_element = document.getElementById(activity_element_id);
    if (!(activity_element.classList.contains('activity_pane_expanded'))) {
      let workers_list = document.getElementById(
          `${activity_element_id}_workers_list`);
      if (typeof workers_list !== 'undefined' && workers_list != null) {
        workers_list.remove();
      }
    }

    else {  

      let workers_list = document.getElementById(
        `${activity_element_id}_workers_list`);
      try {
        console.log(`workers list: ${workers_list}`);
        workers_list.remove()
        console.log('removed worker list');
      } catch(error) {
        console.log('error');
      };

      // Create a div to house the population list
      workers_list = document.createElement('div');
      workers_list.setAttribute('id', 
          `${activity_element_id}_workers_list`);
      activity_element.appendChild(workers_list);

      // Create a header for the population
      let workers_list_header = document.createElement('span');
      workers_list_header.setAttribute(
          'id', `${activity_element_id}_workers_list_header`);
      workers_list_header.innerHTML = 'Workers:';
      workers_list.appendChild(workers_list_header);

      console.log(`game_data.population.length = ${game_data.population.length}`);
      for (let i = 0; i < game_data.population.length; i++) {
        console.log(
            `Adding ${game_data.population[i].name} to the workers list.`);
        let populant_element = game_data.population[i].createSimpleElement('_worker');
        let activity_element_text_span = document.getElementById(
            `${activity_element_id}_text_span`);
        console.log(`populant_element children: <${populant_element.childNodes}>.`);
        //console.log(`populant activity: <${game_data.population[i].activity.name}>.`);
        console.log(`activity name: <${activity_element_text_span.innerHTML}>.`);
        if (game_data.population[i].activity != null) {
          if (game_data.population[i].activity.name == 
              activity_element_text_span.innerHTML) {
            let populant_element_text_span_id = 
                `${game_data.population[i].uuid}_worker_text_span`;
            console.log(`populant_element_text_span_id: \
                <${populant_element_text_span_id}>.`);
            let populant_element_text_span = populant_element.querySelector(
                `#${populant_element_text_span_id}`);
            console.log(populant_element_text_span);
            populant_element_text_span.style.fontWeight = 'bold';
          };
        };
        populant_element.addEventListener('click', function() {
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
        workers_list.appendChild(populant_element);
      }
    } 
  };
};


class Sequence {};


class LocatePreySequence extends Sequence {
  last_step = 720;
  effect = function(participant) {
    console.debug(`<${participant.name}> is searching for prey.`);
    participant.updateStatistic('energy', '-1');
  };
};
  


class HuntPreyActivity extends Activity {

  hunt_prey() {

    console.debug(`${this.name} is hunting prey.`);

    let sequences = {
      '1': '_locate_prey',
      '2': '_stalk_prey',
      '3': '_fight_prey',
      '4': '_prepare_food_from_prey',
      '5': '_eat_food_from_prey'
    };

    this[sequences[this.activity.sequence]]();
  };
  
  /*
  _locate_prey() {
    let subsequence_end_step = 720 // Takes 12 hours to find prey.
    this.activity.subsequence = 1;
    console.debug(`${this.name} is locating prey (<${this.activity.subsequence_step}>/<${subsequence_end_step}>).`);
    this.updateStatistic('energy', -1);
    if (this.activity.subsequence_step >= subsequence_end_step) {
      this.activity.subsequence_step = 1;
      this.activity.sequence += 1;
    } else {
      this.activity.subsequence_step += 1;
    };
  };
  */
};

class Actor {
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

    this.statistics = args.statistics;

            


    // If no name was specified, generate a random one
    this.name = args['name']; 
    if (this.name == null) { this.name = this.generateRandomName() };

    //this.statistics.hunger = args['hunger'];
    let self = this;
    this.statistics.hunger['listener'] = function() {
      if (self.statistics.hunger['current'] == 0) {
        self.die();
      }
    }

    this.statistics.energy['listener'] = function() {
      
      if (self.statistics.energy['current'] <= self.energy_halt_point ||
          self.statistics.energy['current'] == 0) {
        self.activity.name = 'sleep';
      };
    };

    this.statistics.health['listener'] = function() {
      if (self.statistics.health['current'] == 0) {
        self.die();
      };
    };


    if (this.id == null) { this.uuid = `actor_${uuidv4()}` };

    this.activity = null;
    //this.activity_steps = 0;

    //let actor_element = this.generateElement();
    //document.getElementById('population_tab').appendChild(actor_element);
    this.buildPopulantElement();


  }


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


  buildPopulantElement() {
    console.debug(`Adding populant: <${this.name}> (<${this.uuid}>).`);

    let population_tab = document.getElementById('population_tab');

    let populant_element_pane = document.createElement('div');
    populant_element_pane.setAttribute('id', `${this.uuid}_populant_pane`);
    populant_element_pane.classList.add('populant_pane');
    population_tab.appendChild(populant_element_pane);

    // Get a simple base element from the populant's own method.
    let populant_element = this.createSimpleElement('_populant');
    populant_element_pane.appendChild(populant_element);

    // Create an activity progress bar element
    let activity_progress_bar = document.createElement('div');
    activity_progress_bar.setAttribute('id', `${this.uuid}_activity_progress_bar`);
    activity_progress_bar.classList.add('activity_progress_bar');
    populant_element_pane.appendChild(activity_progress_bar);

    // Create an activity progress bar fill element
    let activity_progress_bar_fill = document.createElement('div');
    activity_progress_bar_fill.setAttribute('id', `${this.uuid}_activity_progress_bar_fill`);
    activity_progress_bar_fill.classList.add('activity_progress_bar_fill');
    activity_progress_bar_fill.style.width = '0%';
    activity_progress_bar.appendChild(activity_progress_bar_fill);

    // Add a click handler to expand and hide the div
    let self = this;
    populant_element_pane.addEventListener('click', function(e) {
      console.debug(`<${self.name}> populant pane clicked.`);
      let target_id = e.target.getAttribute('id');
      console.debug(`Populant pane click target id: ${target_id}`);
      if (target_id == `${self.uuid}_populant` ||
          target_id == `${self.uuid}_populant_image` ||
          target_id == `${self.uuid}_populant_text_span`) {
        console.debug(
            `Stopping unintended click on <${self.name}> populant pane.`);
        return;
      };
      populant_element_pane.classList.toggle('populant_pane_expanded');
      let populant_element_text_span = document.getElementById(
          `${self.uuid}_populant_text_span`);
      populant_element_text_span.classList.toggle(
          'populant_pane_title_text_expanded');
    });
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
        `${this.uuid}_activity_progress_bar_fill`);
    activity_progress_bar_fill.style.width = `${completion_percentage}%`;

  };



  /*
  updatePopulantElement() {
    console.debug(`<${this.name}> updating populant element.`);
  */
    


  updateStatistic(statistic, delta) {
    statistic = this.statistics[statistic]
    statistic['current'] += delta;
    if (statistic['current'] > statistic['max']) {
      statistic['current'] = statistic['max'];
    }
    if (statistic.hasOwnProperty('listener')) {
      statistic['listener']();
    };
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
        'id', `${this.uuid}_tooltip_text`);
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
    


  updatePopulationTab() {
    /* Update the contents of the Octopus HTML on page */
    update(`${this.uuid}_tooltip_text`, 
        `
        name: ${this.name}<br>
        energy: ${this.statistics.energy.current}/${this.statistics.energy.max}<br>
        health: ${this.statistics.health.current}/${this.statistics.health.max}<br>
        hunger: ${this.statistics.hunger.current}/${this.statistics.hunger.max}<br>
        `
    );
         
  }; 

  generateRandomName() {
    console.log('generating a random name');
    let names = ['bob', 'emily', 'jon', 'ashley', 'justin', 'sara', 'ed'];

    let random_index = Math.floor(Math.random() * names.length);
    return names[random_index];

  }

  die() {
    game_data.population.splice(game_data.population.findIndex(populant => populant.uuid == this.uuid), 1);
    document.getElementById(this.uuid).remove();
  }
  
}


class Human extends Actor {

  constructor() {
    super();
    /* https://medicalxpress.com/news/2015-12-humans-survive-food.html 
    Humans can survive for about 50 days without food. */
    this.statistics.hunger.current = 4320000;
    this.statistics.hunger.max = 4320000;
  };


  
  
  _stalk_prey() {
    let subsequence_end_step = 480 // Takes 8 hours.
    this.activity.subsequence = 1; // No subsequencing
    console.debug(
        `${this.name} is stalking prey (<${this.activity.subsequence_step}>/<${subsequence_end_step}>).`);
    this.updateStatistic('energy', -1);
    if (this.activity.subsequence_step >= subsequence_end_step) {
      this.activity.subsequence_step = 1;
      this.activity.sequence += 1;
    } else {
      this.activity.subsequence_step += 1;
    };
  };

  _fight_prey() {
    let subsequence_end_step = 60 // 1 hour.
    this.activity.subsequence = 1; // No subsequencing.
    console.debug(
        `${this.name} is fighting prey (<${this.activity.subsequence_step}>/<${subsequence_end_step}>).`);
    this.updateStatistic('energy', -2);
    this.updateStatistic('health', -2);
    if (this.activity.subsequence_step >= subsequence_end_step) {
      this.activity.subsequence_step = 1;
      this.activity.sequence += 1;
    } else {
      this.activity.subsequence_step += 1;
    };
  };

  _prepare_food_from_prey() {
    let subsequence_end_step = 240 // 4 hours.
    this.activity.subsequence = 1; // No subsequencing.
    console.debug(
        `${this.name} is preparing food (<${this.activity.subsequence_step}>/<${subsequence_end_step}>).`);
    this.updateStatistic('energy', -1);
    if (this.activity.subsequence_step >= subsequence_end_step) {
      this.activity.subsequence_step = 1;
      this.activity.sequence += 1;
    } else {
      this.activity.subsequence_step += 1;
    };
  };

  _eat_food_from_prey() {
    let subsequence_end_step = 480 // 8 hours
    this.activity.subsequence = 1; // No subsequencing.
    console.debug(
        `${this.name} is preparing food (<${this.activity.subsequence_step}>/<${subsequence_end_step}>).`);
    this.updateStatistic('energy', -1);
    if (this.activity.subsequence_step >= subsequence_end_step) {
      this.activity.subsequence_step = 1;
      this.activity.sequence = 1;
    } else {
      this.activity.subsequence_step += 1;
    };
  };
    
  
      
    
    /*
    let step = this.activity_steps;
    let last_step = 3680; // The last step, eating, lasts a full day
    console.debug(
        `${this.name} is hunting prey. (Step <${step}>/<${last_step}>).`);
    // Eating food prepared from the hunt.
    if (step >= 2240) { // preparing food from the hunt takes 4 hours.
      console.debug(`${this.name} is eating.`);
      this.updateStatistic('hunger', 5);
      this.updateStatistic('energy', 1); 
    }
    // Preparing food from the prey carcass.
    else if (step >= 1980) { // fighting prey takes 1 hour.
      console.debug(
          `${this.name} is preparing food. (Step <${step}>/<${last_step}>)`);
      this.updateStatistic('energy', -1);
    }
    // Fight the prey.
    else if (step >= 1920) { // stalking prey takes 8 hours.
      console.debug(
          `${this.name} is fighting prey. (Step <${step}>/<${last_step}>)`);
      this.updateStatistic('energy', -2);
      this.updateStatistic('health', -2);
    }
    // Stalk the prey.
    else if (step > 1440) { // locating prey takes 1 day
      console.debug(
          `${this.name} is stalking prey. (Step <${step}>/<${last_step}>)`);
      this.updateStatistic('energy', -1);
    }
    // Locate prey / find trail (1 day).
    else {
      console.debug(
          `${this.name} is locating prey. (Step <${step}>/<${last_step}>)`);
      this.updateStatistic('energy', -1);
    }
    if (step >= last_step) {
      step = 1;
    } else {
      step += 1;
    };
    this.activity_steps = step;
    //this.updateStatistic('hunger', 1);
    */

  sleep() {
    let step = this.activity_steps;
    console.debug(`${this.name} is sleeping.`);
    this.statistics.energy.current += 2;
    if (this.statistics.energy.current >= this.statistics.energy.max) {
      step = 1;
      this.activity = null;
    } else {
      step += 1;
    };
  };

};


  


function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}


function updateEventLog(contents) {
  let message = document.createElement('p');
  message.classList.add('event_message');
  message.innerHTML = contents;
  let event_log = document.getElementById('event_log');
  event_log.appendChild(message);
};


function createEventLog() {
  let event_log = document.createElement('div');
  event_log.setAttribute('id', 'event_log');
  event_log.classList.add('wordwrap');
  document.body.appendChild(event_log);
}


function update(id, content) {
  document.getElementById(id).innerHTML = content;
}


function format(number, type) {
	let exponent = Math.floor(Math.log10(number))
	let mantissa = number / Math.pow(10, exponent)
	if (exponent < 3) return number.toFixed(1)
	if (type == "scientific") return mantissa.toFixed(2) + "e" + exponent
	if (type == "engineering") return (Math.pow(10, exponent % 3) * mantissa).toFixed(2) + "e" + (Math.floor(exponent / 3) * 3)
}


function showTab(tab) {
  console.log(`Showing tab <${tab}>.`);
  // hide all your tabs, then show the one the user selected.
  let colony_tab = document.getElementById('colony_tab');
  if (colony_tab) {
    colony_tab.style.display = 'none';
  };
  let population_tab = document.getElementById('population_tab');
  if (population_tab) {
    population_tab.style.display = 'none';
  };
  let research_tab = document.getElementById('research_tab');
  if (research_tab) {
    research_tab.style.display = 'none';
  };
  document.getElementById(tab).style.display = 'inline-block'
  if (tab != 'colony_tab') {
    if (game_data) {
      //for (i=0; i < game_data.activities.length; i++) {
      let activities = document.getElementsByClassName('activity_pane');
      for (var i=0; i < activities.length; i++) {
        let activity_element = activities[i];
        if (activity_element.classList.contains('activity_pane_expanded')) {
          console.log(`Closing open activity pane.`);
          activity_element.classList.remove('activity_pane_expanded');
          console.log(
              `activity_element classList: \
              ${activity_element.classList}`);
          //activity.updateElement();
        };
      };
    };
  };
}




function setVolume(val) {
  console.log('setVolume triggered.');
  let audio = background_music;
  console.log('Before: ' + audio.volume);
  console.log(`debug - val: <${val}>.`);
  volume = val / 100;
  console.log(`debug - volume: <${volume}>.`);
  audio.volume = volume;
  console.log('After: ' + audio.volume);
}


window.onmousemove = function(e) {
  let tooltip_x = `${e.clientX + 10}px`,
      tooltip_y = `${e.clientY + 10}px`;
      tooltips = document.getElementsByClassName('tooltiptext');
  for (var i = 0; i < tooltips.length; i++) {
    let tooltip = tooltips[i];
    tooltip.style.top = tooltip_y;
    tooltip.style.left = tooltip_x;
  }
};



  

// Do main ////////////////
///////////////////////////


/* Game data is meant to be relevant and preserved between client reloads,
basically saved progress. */
var game_data = Game.createGameDataShell();


// Construct all of the UI elements.
Game.buildUI();

Game.loadSavedData();



var runtime_data = Game.buildRuntimeData();


// Retrieve any valid save data and start autosaving.
//var [game_data, save_data] = Game.loadSavedData();
Game.startAutosaveScheduler();

//runtime_data['activities'] = generateActivities();

createEventLog();

// go to a tab for the first time, so not all show
//tab('colony_tab')

console.log(game_data);
var mainGameLoop = window.setInterval(function() {

  console.log(game_data);

  // Figure out delta from last tick
  // May need this for offline progress (time_delta / main loop ms), but
  // not using currently.
  //time_delta = Date.now() - game_data.lastTick;

  // Save current time as the new "last" tick
  game_data.lastTick = Date.now()

  // Refresh activity panes
  /*
  for (var i=0; i < runtime_data['activities'].length; i++) {
    let activity = runtime_data['activities'][i];
    activity.updateElement();
  */
  /*
  activity_panes = document.getElementsByClassName('activity_pane');
  for (var i=0; i < activity_panes.length; i++ ) {
    let activity = activity_panes[i];
    console.log(`Iterating activity (<${activity}>) for update.`);
    let activity_id = `${activity.getAttribute('id')}`;
    //Game.updateActivityElement(activity_id);
  };
  */

  for (var i = 0; i < game_data.population.length; i++) {
    let populant = game_data.population[i];

    /*
    // Check and apply octopus tasks
    if (octopus.activity != null) {
      let activity = runtime_data['activities'].find(function (activity) {
        return activity.name == octopus.activity;
      });
      for (let [effect, change] of Object.entries(activity.effects.octopi)) {
        octopus.updateAttribute(effect, change);
      }
      for (let [effect, change] of Object.entries(activity.effects.game)) {
        game_data[effect]['current'] += change;
        if (game_data[effect]['current'] > game_data[effect]['max']) {
          game_data[effect]['current'] = game_data[effect]['max'];
        };
      };
    };
    */

    if (populant.activity != null) {
      console.log(`${populant.name} doing ${populant.activity.name}.`);
      //if (populant.hasOwnProperty(populant.activity)) {
      if (true) {
        console.log(`${populant.name} has property ${populant.activity}.`);
        populant[populant.activity.name]();
      };
    };

    // Update octopus element
    //game_data.octopi[i].updatePopulationTab();


    // Updates tooltips
    populant.updatePopulationTab();
    populant.updateActivityProgressBar();

    populant.updateStatistic('hunger', -1);

  }
    
  Game.tryRandomTraveller();

  Game.updatePopulationTab();

  // Update octopi count
  update('population_p', 'population: ' + game_data.population.length);
  

}, 1000)
