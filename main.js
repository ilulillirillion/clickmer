/* Underutilized, pending removal 
function addClassesToElement(element_id, classes) {
  // Get the element using the provided ID
  let element = document.getElementById(element_id);
  for (var i == 0; i < classes.length; i ++) {
    // Add the provided class to the element's class list
    element.classList.add(_class);
}
*/


class Octopus {
  constructor(
      hunger = 100,
      name = null) {

    // If no name was specified, generate a random one
    this.name = name; 
    if (this.name == null) { this.name = this.generateRandomName() };

    this.hunger = hunger;
    this.uuid = `octopus_${uuidv4()}`;
    this.activity = null;

    let octopus_element = this.generateElement();
    document.getElementById('population_menu').appendChild(octopus_element);


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
        hunger: ${this.hunger}<br>`
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
    console.log(`Updating ${this.uuid} on the population tab.`);
    console.log(`Showing ${this.name} for ${this.uuid}`);
    update(`${this.uuid}_tooltip_text`, 
        `
        name: ${this.name}<br>
        hunger: ${this.hunger}
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
    document.getElementById('colony_menu').appendChild(this.element);

  }

  // Allows an optional event parameter in case it is click-triggered
  updateElement() {
    //let text_span = document.getElementById(
    //    `${this.element.getAttribute('id')_text_span}`);

    //console.log(
    //    `Click target is <${e.target}> (<${e.target.getAttribute('id')}>`);
    //if(e.target.getAttribute('id').includes('octo')) {
    //  e.preventDefault();
    //  e.stopPropagation();
    //}
    /*
    else {
      this.props.selectNote(this.props.note)
    }
    */


    if (!(this.element.classList.contains('activity_div_expanded'))) {
      console.log('activity div is not expanded');
      let workers_list = document.getElementById(
          `${this.element.getAttribute('id')}_workers_list`);
      if (typeof workers_list !== 'undefined' && workers_list != null) {
        workers_list.remove();
      }
    }

    else {
      

      //let workers_list = document.querySelector(
      //    `activity_${this.element.getAttribute('id')}_workers_list`);
      //let workers_list = document.querySelector(`.${_stupid_fuck}`);
      let workers_list = document.getElementById(
        `${this.element.getAttribute('id')}_workers_list`);
      //console.log(`TEST1 ${workers_list}`);
      /*
      if (!(typeof workers_list === 'undefined')) {
        console.log('workers list not undefined');
        console.log(`workers list: ${workers_list}`);
        console.log(`type of workers list: ${typeof workers_list}`);
        if (!(workers_list == null)) {
          console.log('workers list is not null');
          //if (workers_list) {
          console.log('cleaning up workers list.');
          console.log(typeof workers_list);
          console.log(workers_list);
          //workers_list.innerHTML = ''
          workers_list.remove();
        }
      }
      */
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
        //if (game_data.octopi[i].activity == this.name) {
        if (game_data.octopi[i].activity == activity_element_text_span.innerHTML) {
          let octopus_element_text_span_id = 
              `${game_data.octopi[i].uuid}_worker_text_span`;
          console.log(`octopus_element_text_span_id: \
              <${octopus_element_text_span_id}>.`);
          //let octopus_element_text_span = document.getElementById(
          //    octopus_element_text_span_id);
          let octopus_element_text_span = octopus_element.querySelector(
              `#${octopus_element_text_span_id}`);
          console.log(octopus_element_text_span);
          //octopus_element_text_span.innerHTML == octopus_element_text_span.innerHTML.bold();
          octopus_element_text_span.style.fontWeight = 'bold';
        };
        octopus_element.addEventListener('click', function() {
          /*
          if (!e.target.getAttribute('id').includes('octo')) {
            e.preventDefault();
            e.stopPropagation();
          }
          */
          //e.stopPropagation();
          //console.log(
          //    `Click target is <${e.target}> (<${e.target.getAttribute('id')})>`);
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


    /* Create and attach a tooltip span -- also enables the tooltip class
    on the activity div element. */
    // First, the tooltip div.
    /*
    let activity_element_tooltip = document.createElement('div');
    activity_element_tooltip.setAttribute(
      'id', `${activity_element_id}_tooltip`);
    activity_element_tooltip.classList.add('tooltip');
    activity_element.appendChild(activity_element_tooltip);
    */
    // Second, the text span.
    let activity_element_tooltip_text = document.createElement('span');
    activity_element_tooltip_text.setAttribute(
        'id', `${activity_element_id}_tooltip_text`);
    activity_element_tooltip_text.classList.add('tooltiptext');
    activity_element_tooltip_text.innerHTML = tooltip_text;
    activity_element.classList.add('tooltip');
    activity_element.appendChild(activity_element_tooltip_text);

    /* Create a clickable span to expand the root div to display more options
    or shrink it if already expanded. Attaches to the activity div element. */
    /*
    let activity_element_expand_span = document.createElement('span');
    activity_element_expand_span.setAttribute(
        'id', `${activity_element_id}_expand_button`);
    activity_element_expand_span.classList.add('clickable_text');
    activity_element_expand_span.classList.add('expand_span');
    activity_element_expand_span.innerHTML = 'expand +/-'
    activity_element_expand_span.addEventListener('click', function() {
      console.log('expand button clicked!');
    });
    activity_element.appendChild(activity_element_expand_span);
    */
    

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


//function mineGold() {
//  game_data.gold += game_data.goldPerClick
//  update("goldMined", game_data.gold + " Gold Mined")
//}

//function buyGoldPerClick() {
//  if (game_data.gold >= game_data.goldPerClickCost) {
//    game_data.gold -= game_data.goldPerClickCost
//    game_data.goldPerClick += 1
//    game_data.goldPerClickCost *= 2
//    update("goldMined", game_data.gold + " Gold Mined")
//    update("perClickUpgrade", "Upgrade Pickaxe (Currently Level " + game_data.goldPerClick + ") Cost: " + game_data.goldPerClickCost + " Gold")
//  }
//}


var saveGame = window.setInterval(function() {
  localStorage.setItem('game_save_data', JSON.stringify(game_data))
}, 15000)

function format(number, type) {
	let exponent = Math.floor(Math.log10(number))
	let mantissa = number / Math.pow(10, exponent)
	if (exponent < 3) return number.toFixed(1)
	if (type == "scientific") return mantissa.toFixed(2) + "e" + exponent
	if (type == "engineering") return (Math.pow(10, exponent % 3) * mantissa).toFixed(2) + "e" + (Math.floor(exponent / 3) * 3)
}


function tab(tab) {
  // hide all your tabs, then show the one the user selected.
  //document.getElementById("mineGoldMenu").style.display = "none"
  //document.getElementById("shopMenu").style.display = "none"
  document.getElementById('colony_menu').style.display = 'none'
  document.getElementById('population_menu').style.display = 'none'
  document.getElementById('research_menu').style.display = 'none'
  document.getElementById(tab).style.display = 'inline-block'
}


var mainGameLoop = window.setInterval(function() {

  // Figure out delta from last tick
  time_delta = Date.now() - game_data.lastTick;

  // Save current time as the new "last" tick
  game_data.lastTick = Date.now()

  //game_data.gold += game_data.goldPerClick * (diff / 1000)
  //update("goldMined", game_data.gold + " Gold Mined")

  // Refresh activity panes
  //for (activity in game_data['activities']) {
  for (var i=0; i < game_data['activities'].length; i++) {
    let activity = game_data['activities'][i];
    console.log(`Refreshing activity: ${activity.name}`);
    activity.updateElement();
  };

  for (var i = 0; i < game_data.octopi.length; i++) {
    console.log('Ticking an octopus');
    let octopus = game_data.octopi[i];


    // Check and apply octopus tasks
    if (octopus.activity != null) {
      //let activity = game_data['activities'][octopus.activity];
      let activity = game_data['activities'].find(function (activity) {
        return activity.name == octopus.activity;
      });
      console.log(`activity.effects: <${activity.effects}>`);
      for (let [effect, change] of Object.entries(activity.effects)) {
      //for (const [key, value] of Object.entries(object))
        console.log(`Applying ${change} to ${effect}`);
        octopus[effect] += change;
      }
    }

            

    // Octopi get hungrier each tick
    //console.log('Octopus grows hungrier');
    octopus.hunger -= 1;


    // Update octopus element
    game_data.octopi[i].updatePopulationTab();

    // If an octopus has a hunger of 0
    if (octopus.hunger == 0) {
      console.log('Octopus has starved!');
      // The octopus dies of starvation
      //game_data.octopi.splice(i, 1)
      game_data.octopi[i].die();
    }

  }
    

  // Octopi generation
  if (game_data.octopi == 0) {
    var chance = Math.random();
    if (chance < 0.1) {
      let octopus = new Octopus();
      game_data.octopi.push(octopus);
      updateEventLog(`${octopus.name} has arrived!`);
    }
  }

  // Update octopi count
  update('population_p', 'octopi: ' + game_data.octopi.length);

  // update test log
  //let event_log = document.getElementById('event_log');
  //let new_event = document.createElement('p')
  //new_event.innerHTML = 'test test test';
  //event_log.appendChild(new_event);
  //updateEventLog('ha ha ha');
    

}, 1000)


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

  

  let hunt_prey_effects = { 'hunger': 2 };
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


function playMusic() {
  var background_music_promise = background_music.play();
  if (background_music_promise !== undefined) {
      background_music_promise.then(_ => {
          // Autoplay started!
          console.log('Autoplay started');
      }).catch(error => {
          // Autoplay was prevented.
          // Show a "Play" button so that user can start playback.
          console.log(`Autoplay error: <${error}>.`);
      });
  }
}

  

// Do main



var save_data = localStorage.getItem('game_save_data')
var game_data = {
  //gold: 0,
  //goldPerClick: 1,
  //goldPerClickCost: 10,
  assigning: null,
  octopi: [],
  lastTick: Date.now()
}

window.onload = function () {


  // Add a mute button!
  let music_button = document.createElement('button');
  music_button.setAttribute('id', 'music_button');
  music_button.innerHTML = 'Music';
  music_button.addEventListener('click', function() {
    console.log('mute button clicked');
    //let audio = document.getElementById('background_music_audio');
    if (typeof background_music == 'undefined') {
      background_music = new Audio('aquatic_ambience.mp3');
      //background_music = new Audio('https://www.vgmusic.com/new-files/DKC1_-_Aquatic_Ambience.mid');
      background_music.id = 'background_music_audio';
      background_music.loop = true;
      //background_music.muted = true;
      background_music.play(); 
      return;
    }
      
    let audio = background_music;
    if (background_music.paused) {
      playMusic();
    }
    audio.muted = !audio.muted;
    console.log(`Background music is muted: <${audio.muted}>.`);
  });
  document.body.appendChild(music_button);

  // Add a volume slider
  //<input id="vol-control" type="range" min="0" max="100" step="1" oninput="SetVolume(this.value)" onchange="SetVolume(this.value)"></input>
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


  game_data['activities'] = generateActivities();
  //console.log(`hunt_prey classes: <${game_data['activities']['hunt_prey']}>`);

  createEventLog();

  // go to a tab for the first time, so not all show
  tab('colony_menu')

  //if (typeof save_data.gold !== "undefined") game_data.gold = save_data.gold;
  //if (typeof save_data.goldPerClick !== "undefined") game_data.goldPerClick = save_data.goldPerClick;
  //if (typeof save_data.goldPerClickCost !== "undefined") game_data.goldPerClickCost = save_data.goldPerClickCost;
  if (typeof save_data.octopi !== 'undefined') game_data.octopi = save_data.octopi;
  if (typeof save_data.lastTick !== "undefined") game_data.lastTick = save_data.lastTick;

}
