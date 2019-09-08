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
    octopus_element.setAttribute('id', this.uuid);

    // Creates an image which represents the octopus.
    let octopus_element_image = document.createElement('img');
    octopus_element_image.setAttribute('src', 'octopus.png');
    octopus_element_image.style.height = '16px';
    octopus_element_image.style.width = '16px';
    // Makes the element clickable.
    octopus_element_image.addEventListener('click', function() {
      console.log('click test success');
    });
    // Appends to the octopus element root.
    octopus_element.appendChild(octopus_element_image);

    // Creates a span for element text.
    let octopus_element_text_span = document.createElement('span');
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
    activity_element_text_span.setAttribute(
        'id', `${activity_element_id}_text_span`);
    activity_element_text_span.classList.add('activity_div_text');
    activity_element_text_span.innerHTML = this.name;
    activity_element.appendChild(activity_element_text_span);

    /* Create and attach a tooltip span -- also enables the tooltip class
    on the activity div element. */
    let activity_element_tooltip_text = document.createElement('span');
    activity_element_tooltip_text.setAttribute(
        'id', `${activity_element_id}_tooltip_text`);
    activity_element_tooltip_text.classList.add('tooltiptext');
    activity_element_tooltip_text.innerHTML = tooltip_text;
    activity_element.classList.add('tooltip');
    activity_element.appendChild(activity_element_tooltip_text);

    /* Create a clickable span to expand the root div to display more options
    or shrink it if already expanded. Attaches to the activity div element. */
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

}


// Do main
window.onload = function () {

activities = generateActivities();

// go to a tab for the first time, so not all show
tab('colony_menu')

//if (typeof save_data.gold !== "undefined") game_data.gold = save_data.gold;
//if (typeof save_data.goldPerClick !== "undefined") game_data.goldPerClick = save_data.goldPerClick;
//if (typeof save_data.goldPerClickCost !== "undefined") game_data.goldPerClickCost = save_data.goldPerClickCost;
if (typeof save_data.octopi !== 'undefined') game_data.octopi = save_data.octopi;
if (typeof save_data.lastTick !== "undefined") game_data.lastTick = save_data.lastTick;

}
