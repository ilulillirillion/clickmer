class Octopus {
  constructor(hunger = 100) {

    this.hunger = hunger
    this.uuid = uuidv4()

    let element = document.createElement('p');
    element.setAttribute('id', this.uuid);

    document.getElementById('population_menu').appendChild(element);
    update(this.uuid, 'octopus');

  }

  die() {
    game_data.octopi.splice(game_data.octopi.findIndex(octopus => octopus.uuid == this.uuid), 1);
    document.getElementById(this.uuid).remove();
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
      game_data.octopi.push(new Octopus(10));
    }
  }

  // Update octopi count
  update('population_p', 'octopi: ' + game_data.octopi.length);
    

}, 1000)


// Do main
window.onload = function () {

// go to a tab for the first time, so not all show
tab('colony_menu')

//if (typeof save_data.gold !== "undefined") game_data.gold = save_data.gold;
//if (typeof save_data.goldPerClick !== "undefined") game_data.goldPerClick = save_data.goldPerClick;
//if (typeof save_data.goldPerClickCost !== "undefined") game_data.goldPerClickCost = save_data.goldPerClickCost;
if (typeof save_data.octopi !== 'undefined') game_data.octopi = save_data.octopi;
if (typeof save_data.lastTick !== "undefined") game_data.lastTick = save_data.lastTick;

}
