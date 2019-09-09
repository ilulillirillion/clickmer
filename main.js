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

    this.hunger = hunger
    this.uuid = uuidv4()

    /* Creates a new element to represent the octopus in population view. The
    element ID should be equal to the octopus's UUID, and the element
    should have a tooltip displaying details. */

    // Creates the element root div.
    let octopus_element = document.createElement('div');
    let octopus_element_id = this.uuid;
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
    octopus_element_text_span.setAttribute(
        'id', `${octopus_element_id}_text_span`);
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
    
    // Append the finished element to the population menu
    document.getElementById('population_menu').appendChild(octopus_element);

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
  constructor(name, tooltip_text) {

    this.name = name;
    this.uuid = uuidv4();

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
    activity_element.addEventListener('click', function(e) {

      if (e.target.getAttribute('id') != activity_element_id &&
          e.target.getAttribute('id') != activity_element_text_span_id) {
        return;
     }

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

      activity_element.classList.toggle('activity_div_expanded');
      console.log(`activity_element className: ${activity_element.className}`);
      activity_element_text_span.classList.toggle(
          'activity_div_title_text_expanded');
      console.log(
          `activity_element_text_span className: \
          ${activity_element_text_span.className}`);

      if (activity_element.classList.contains('activity_div_expanded')) {

        // Create a div to house the population list
        let workers_list = document.createElement('div');
        workers_list.setAttribute('id', `${activity_element_id}_workers_list`);
        activity_element.appendChild(workers_list);

        // Create a header for the population
        let workers_list_header = document.createElement('span');
        workers_list_header.setAttribute(
            'id', `${activity_element_id}_workers_list_header`);
        workers_list_header.innerHTML = 'Workers:';
        workers_list.appendChild(workers_list_header);

        console.log(`game_data.octopi.length = ${game_data.octopi.length}`);
        for (let i = 0; i < game_data.octopi.length; i++) {
          console.log(
              `Adding ${game_data.octopi[i].name} to the workers list.`);
          let octopus_element_clone = document.getElementById(
              game_data.octopi[i].uuid).cloneNode(true);
          octopus_element_clone.setAttribute(
              'id', `${activity_element_id}_octopus_clone_\
                    ${game_data.octopi[i].uuid}`);
          octopus_element_clone.addEventListener('click', function() {
            /*
            if (!e.target.getAttribute('id').includes('octo')) {
              e.preventDefault();
              e.stopPropagation();
            }
            */
            e.stopPropagation();
            console.log(
                `Click target is <${e.target}> (<${e.target.getAttribute('id')})>`);
            console.log('worker clicked!');
          });
          workers_list.appendChild(octopus_element_clone);
        }
      } 
      else {
        let workers_list = document.getElementById(
            `${activity_element_id}_workers_list`);
        workers_list.remove();
      }
    });


    // Attach the completed element to the colony menu
    document.getElementById('colony_menu').appendChild(activity_element);

  }
}
  


function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}


var save_data = localStorage.getItem('game_save_data')
var game_data = {
  //gold: 0,
  //goldPerClick: 1,
  //goldPerClickCost: 10,
  assigning: null,
  octopi: [],
  lastTick: Date.now()
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

  for (var i = 0; i < game_data.octopi.length; i++) {
    console.log('Ticking an octopus');
    let octopus = game_data.octopi[i];

    // Octopi get hungrier each tick
    console.log('Octopus grows hungrier');
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
      game_data.octopi.push(new Octopus());
    }
  }

  // Update octopi count
  update('population_p', 'octopi: ' + game_data.octopi.length);
    

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
  
  activities = {};

  let hunt_prey = new Activity(
      name='hunt prey', tooltip_text='hunt some prey');
  let hunt_prey_element = document.getElementById(hunt_prey.uuid);
  hunt_prey_element.addEventListener('click', function() {
    console.log(`${hunt_prey.name} clicked!`);
  });
  activities['hunt_prey'] = hunt_prey;

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



background_music = new Audio('aquatic_ambience.mp3');
//background_music = new Audio('https://www.vgmusic.com/new-files/DKC1_-_Aquatic_Ambience.mid');
background_music.id = 'background_music_audio';
background_music.loop = true;
background_music.muted = true;
//background_music.play(); 

window.onload = function () {


  // Add a mute button!
  let mute_button = document.createElement('button');
  mute_button.setAttribute('id', 'mute_button');
  mute_button.innerHTML = 'mute';
  mute_button.addEventListener('click', function() {
    console.log('mute button clicked');
    //let audio = document.getElementById('background_music_audio');
    let audio = background_music;
    if (background_music.paused) {
      playMusic();
    }
    audio.muted = !audio.muted;
    console.log(`Background music is muted: <${audio.muted}>.`);
  });
  document.body.appendChild(mute_button);

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


  activities = generateActivities();
  console.log(`hunt_prey classes: <${activities['hunt_prey']}>`);

  // go to a tab for the first time, so not all show
  tab('colony_menu')

  //if (typeof save_data.gold !== "undefined") game_data.gold = save_data.gold;
  //if (typeof save_data.goldPerClick !== "undefined") game_data.goldPerClick = save_data.goldPerClick;
  //if (typeof save_data.goldPerClickCost !== "undefined") game_data.goldPerClickCost = save_data.goldPerClickCost;
  if (typeof save_data.octopi !== 'undefined') game_data.octopi = save_data.octopi;
  if (typeof save_data.lastTick !== "undefined") game_data.lastTick = save_data.lastTick;

}
