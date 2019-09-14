function capitalizeString(string) {
  return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
};

class Game {

  static buildGameData() {
    let game_data = {
      octopi: [],
      available_prey: {
        'current': 10000,
        'max': 10000
      },
      lastTick: Date.now()
    };
    return game_data;
  };


  static buildRuntimeData() {
    let runtime_data = {};
    runtime_data['activities'] = generateActivities();
    runtime_data['background_music'] = null;
    return runtime_data;
  };
  
  static tickWanderingOctopi() {
    let chance = 0.0001;
    // Octopi generation
    if (game_data.octopi.length == 0) {
      chance += 0.1;
    }
    else if (game_data.octopi.length < 3) {
      chance += 0.05;
    };
    let diceroll = Math.random();
    console.log(
        `Octopus gen (chance: ${chance}) dice rolled (<${diceroll}>).`);
    if (diceroll < chance) {
      let octopus = new Octopus();
      game_data.octopi.push(octopus);
      updateEventLog(`${octopus.name} has arrived!`);
    };
  };

  static loadGameData() {
    // Loading the game is no different than loading a save
    game_data = Game.loadSavedData();
    return game_data;
  }; 

  static loadSavedData() {
    console.log('Loading saved data');
    let game_data = Game.buildGameData();
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
      if (typeof save_data['octopi'] !== 'undefined') {
        console.log('Loading saved octopi');
        for (let i=0; i < save_data.octopi.length; i++) {
          let octopus = new Octopus(save_data.octopi[i]);
          console.log(`loaded octopus <${octopus}>`);
          game_data['octopi'].push(octopus);
        }
      };
      if (typeof save_data['available_prey'] !== 'undefined') {
        console.log('loading saved available prey');
        game_data['available_prey'] = save_data.available_prey;
      };
      if (typeof save_data['lastTick'] !== "undefined") {
        console.log('loading saved lastTick');
        game_data['lastTick'] = save_data.lastTick;
      };
    };
    console.log(`Returning game_data: <${game_data}>`);
    return game_data
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
    /*
    let population_tab = document.createElement('div');
    population_tab.setAttribute('id', 'population_tab');
    document.body.append(population_tab);
    */
    Game.createTab('population');
  }

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
    Game.buildAudio();
    showTab('colony_tab');
  }
}


class Octopus {
  constructor(args={
    'uuid': null,
    'hunger': {
      'max': 100,
      'current': 100
    },
    'name': null }) {


    // If no name was specified, generate a random one
    this.name = args['name']; 
    if (this.name == null) { this.name = this.generateRandomName() };

    this.hunger = args['hunger'];
    let self = this;
    this.hunger['listener'] = function(that) {
      if (self.hunger['current'] == 0) {
        self.die();
      }
    }
    if (this.id == null) { this.uuid = `octopus_${uuidv4()}` };
    this.activity = null;

    let octopus_element = this.generateElement();
    document.getElementById('population_tab').appendChild(octopus_element);


  }

  updateAttribute(attribute, delta) {
    attribute = this[attribute]
    attribute['current'] += delta;
    if (attribute['current'] > attribute['max']) {
      attribute['current'] = attribute['max'];
    }
    attribute['listener']();
  }

  generateElement(id_suffix='') {
    /* Creates a new element to represent the octopus in population view. The
    element ID should be equal to the octopus's UUID, and the element
    should have a tooltip displaying details. */

    console.log(`Making octopus element with suffix: <${id_suffix}>.`);

    // Creates the element root div.
    let octopus_element = document.createElement('div');
    let octopus_element_id = `${this.uuid}${id_suffix}`;
    octopus_element.setAttribute('id', octopus_element_id);

    // Creates an image which represents the octopus.
    let octopus_element_image = document.createElement('img');
    octopus_element_image.setAttribute('id', `${octopus_element_id}_image`);
    octopus_element_image.setAttribute('src', 'octopus.png');
    octopus_element_image.style.height = '16px';
    octopus_element_image.style.width = '16px';
    // Makes the element clickable.
    octopus_element_image.addEventListener('click', function() {
      console.log('click test success');
      game_data['assigning'] = this.uuid;
    });
    // Appends to the octopus element root.
    octopus_element.appendChild(octopus_element_image);

    // Creates a span for element text.
    let octopus_element_text_span = document.createElement('span');
    let octopus_element_text_span_id = `${octopus_element_id}_text_span`;
    octopus_element_text_span.setAttribute(
        'id', octopus_element_text_span_id);
    console.log(
        `octopus_element_text_span_id: <${octopus_element_text_span_id}>`);
    octopus_element_text_span.innerHTML = this.name;
    // Append to the octopus element root
    octopus_element.appendChild(octopus_element_text_span);

    // Creates a tooltip span.
    let octopus_element_tooltip_text_span = document.createElement('span');
    octopus_element_tooltip_text_span.innerHTML = `
        name: ${this.name}<br>
        hunger: ${this.hunger['current']}<br>`
    octopus_element_tooltip_text_span.setAttribute(
        'id', `${this.uuid}_tooltip_text`);
    octopus_element_tooltip_text_span.classList.add('tooltiptext');
    // Appends tooltip text span and add tooltip class to octopus root element.
    octopus_element.classList.add('tooltip');
    octopus_element.appendChild(octopus_element_tooltip_text_span);

    return octopus_element
  }
    


  updatePopulationTab() {
    /* Update the contents of the Octopus HTML on page */
    update(`${this.uuid}_tooltip_text`, 
        `
        name: ${this.name}<br>
        hunger: ${this.hunger['current']}
        `
    );
  } 

  generateRandomName() {
    console.log('generating a random name');
    let names = ['bob', 'emily', 'jon', 'ashley', 'justin', 'sara', 'ed'];

    let random_index = Math.floor(Math.random() * names.length);
    return names[random_index];

  }

  die() {
    game_data.octopi.splice(game_data.octopi.findIndex(octopus => octopus.uuid == this.uuid), 1);
    document.getElementById(this.uuid).remove();
  }
}


class Activity {
  constructor(name, tooltip_text, effects) {

    this.name = name;
    this.uuid = `activity_${uuidv4()}`;
    this.effects = effects;
    this.element = this.createElement();

    // Attach the completed element to the colony menu
    document.getElementById('colony_tab').appendChild(this.element);

  }

  // Allows an optional event parameter in case it is click-triggered
  updateElement() {

    if (!(this.element.classList.contains('activity_div_expanded'))) {
      let workers_list = document.getElementById(
          `${this.element.getAttribute('id')}_workers_list`);
      if (typeof workers_list !== 'undefined' && workers_list != null) {
        workers_list.remove();
      }
    }

    else {
      

      let workers_list = document.getElementById(
        `${this.element.getAttribute('id')}_workers_list`);
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
          `${this.element.getAttribute('id')}_workers_list`);
      this.element.appendChild(workers_list);

      // Create a header for the population
      let workers_list_header = document.createElement('span');
      workers_list_header.setAttribute(
          'id', `${this.element.getAttribute('id')}_workers_list_header`);
      workers_list_header.innerHTML = 'Workers:';
      workers_list.appendChild(workers_list_header);

      console.log(`game_data.octopi.length = ${game_data.octopi.length}`);
      for (let i = 0; i < game_data.octopi.length; i++) {
        console.log(
            `Adding ${game_data.octopi[i].name} to the workers list.`);
        let octopus_element = game_data.octopi[i].generateElement('_worker');
        let activity_element_text_span = document.getElementById(
            `${this.element.getAttribute('id')}_text_span`);
        console.log(`octopus_element children: <${octopus_element.childNodes}>.`);
        console.log(`octopus activity: <${game_data.octopi[i].activity}>.`);
        console.log(`activity name: <${activity_element_text_span.innerHTML}>.`);
        if (game_data.octopi[i].activity == activity_element_text_span.innerHTML) {
          let octopus_element_text_span_id = 
              `${game_data.octopi[i].uuid}_worker_text_span`;
          console.log(`octopus_element_text_span_id: \
              <${octopus_element_text_span_id}>.`);
          let octopus_element_text_span = octopus_element.querySelector(
              `#${octopus_element_text_span_id}`);
          console.log(octopus_element_text_span);
          octopus_element_text_span.style.fontWeight = 'bold';
        };
        octopus_element.addEventListener('click', function() {
          console.log('worker clicked!');
          if (game_data.octopi[i].activity != 
              activity_element_text_span.innerHTML) {
            game_data.octopi[i].activity = activity_element_text_span.innerHTML;
          } else {
            game_data.octopi[i].activity = null;
          };
        });
        workers_list.appendChild(octopus_element);
      }
    } 
  };

  createElement() {

    // Create a DOM element to represent the activity.
    let activity_element = document.createElement('div');
    let activity_element_id = this.uuid;
    activity_element.setAttribute('id', activity_element_id);
    activity_element.classList.add('activity_div');

    
    // Create and attach a span to act as inner text.
    let activity_element_text_span = document.createElement('span');
    let activity_element_text_span_id = `${activity_element_id}_text_span`;
    activity_element_text_span.setAttribute(
        'id', activity_element_text_span_id);
    activity_element_text_span.classList.add('activity_div_title_text');
    activity_element_text_span.innerHTML = this.name;
    activity_element.appendChild(activity_element_text_span);


    // Second, the text span.
    let activity_element_tooltip_text = document.createElement('span');
    activity_element_tooltip_text.setAttribute(
        'id', `${activity_element_id}_tooltip_text`);
    activity_element_tooltip_text.classList.add('tooltiptext');
    activity_element_tooltip_text.innerHTML = tooltip_text;
    activity_element.classList.add('tooltip');
    activity_element.appendChild(activity_element_tooltip_text);


    // Make the parent div expand on click to show more details and options
    // "this" will be unavailable inside of event function, so use "that"
    var that = this;
    activity_element.addEventListener('click', function(e) {

      if (e.target.getAttribute('id') != activity_element_id &&
          e.target.getAttribute('id') != activity_element_text_span_id) {
        return;
      }
      that.element.classList.toggle('activity_div_expanded');
      console.log(`activity_element className: ${that.element.className}`);
      activity_element_text_span.classList.toggle(
          'activity_div_title_text_expanded');
      console.log(
          `activity_element_text_span className: \
          ${activity_element_text_span.className}`);
      that.updateElement();

    });

    console.log(`returning ${activity_element}`);
    return activity_element;

  }

}
  


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
      for (i=0; i < game_data.activities.length; i++) {
        let activity = game_data.activities[i];
        let activity_element = document.getElementById(activity.uuid);
        if (activity_element.classList.contains('activity_div_expanded')) {
          console.log(`Closing open activity pane: <${activity.name}>.`);
          activity_element.classList.remove('activity_div_expanded');
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


function generateActivities() {
  
  activities = [];

  

  let hunt_prey_effects = {
    'octopi' : { 'hunger': 2 },
    'game' : { 'available_prey': -2 }
  };
  let hunt_prey = new Activity(
      name='hunt_prey', tooltip_text='hunt some prey', 
      effect=hunt_prey_effects);
  let hunt_prey_element = document.getElementById(
      hunt_prey.uuid);
  hunt_prey_element.addEventListener('click', function() {
    console.log(`${hunt_prey.name} clicked!`);
  });
  //activities.append(hunt_prey);
  activities.push(hunt_prey);

  return activities;

};

window.onmousemove = function(e) {
  let tooltip_x = `${e.clientX + 10}px`,
      tooltip_y = `${e.clientY + 10}px`;
      tooltips = document.getElementsByClassName('tooltiptext');
  for (var i = 0; i < tooltips.length; i++) {
    let tooltip = tooltips[i];
    //console.log(`Anchoring tooltip to mouse: <${tooltip.getAttribute('id')}>`);
    tooltip.style.top = tooltip_y;
    tooltip.style.left = tooltip_x;
  }
};



  

// Do main ////////////////
///////////////////////////


/* Game data is meant to be relevant and preserved between client reloads,
basically saved progress. */
//var game_data = {
//  octopi: [],
//  available_prey: {
//    'current': 10000,
//    'max': 10000
//  },
//  lastTick: Date.now()
//};
// Runtime data is basically just a global namespace for referencing things.
//var runtime_data = {
//  'activities': null,    
//  'background_music': null  // ---
//};


// Construct all of the UI elements.
Game.buildUI();


/* Game data is meant to be relevant and preserved between client reloads,
basically saved progress. */
var game_data = Game.loadGameData();


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
  for (var i=0; i < runtime_data['activities'].length; i++) {
    let activity = runtime_data['activities'][i];
    activity.updateElement();
  };

  for (var i = 0; i < game_data.octopi.length; i++) {
    let octopus = game_data.octopi[i];

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

    // Update octopus element
    game_data.octopi[i].updatePopulationTab();

    octopus.updateAttribute('hunger', -1);

  }
    
  Game.tickWanderingOctopi();

  // Update octopi count
  update('population_p', 'octopi: ' + game_data.octopi.length);
  
  console.log(`Available prey: <${game_data.available_prey['current']}>/\
              <${game_data.available_prey['max']}>.`);

}, 1000)
