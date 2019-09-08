var save_data = localStorage.getItem('game_save_data')
var game_data = {
  //gold: 0,
  //goldPerClick: 1,
  //goldPerClickCost: 10,
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

var mainGameLoop = window.setInterval(function() {
  time_delta = Date.now() - game_data.lastTick;
  game_data.lastTick = Date.now()
  //game_data.gold += game_data.goldPerClick * (diff / 1000)
  //update("goldMined", game_data.gold + " Gold Mined")
}, 1000)

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



// Do main
window.onload = function () {

// go to a tab for the first time, so not all show
tab('colony_menu')

//if (typeof save_data.gold !== "undefined") game_data.gold = save_data.gold;
//if (typeof save_data.goldPerClick !== "undefined") game_data.goldPerClick = save_data.goldPerClick;
//if (typeof save_data.goldPerClickCost !== "undefined") game_data.goldPerClickCost = save_data.goldPerClickCost;
if (typeof save_data.lastTick !== "undefined") game_data.lastTick = save_data.lastTick;

}
