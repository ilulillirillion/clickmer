//import Place from '../classes/Place.js';
import Thing from '../classes/Thing.js';
import Calendar from '../classes/Calendar.js';
import WorldMap from '../classes/WorldMap.js';
import Populant from '../classes/Populant.js';


/*
export default class World extends Place {
  constructor({ uuid = null, name = 'world' } =
              { uuid: null, name: 'world' }) {
    super({ uuid, name });

    this.calendar = new Calendar();

    this.population = [];

  };

  tick() {
    super.tick();
    this.calendar.tick();
  };


};
*/


export default class World extends WorldMap {
  constructor({ uuid = null, name = 'world' } =
              { uuid: null, name: 'world' }) {
    super({ uuid, name });

    this.calendar = new Calendar();
    //this.places = [];

    //this.map = new WorldMap();

  };

  /*
  get population() {
    let population = [];
    for (let place of this.places) {
      population.push.apply(place.population);
    };
    return population;
  };
  */

  /*
  get contents() {
    let contents = [];
    for (let place of this.places) {
      contents.push.apply(place.contents);
    };
    return contents;
  };
  */

  /*
  get structures() {
    let structures = [];
    for (let place of this.places) {
      structures.push.apply(place.structures);
    };
    return structures;
  };
  */

  /*
  get map() {
    console.warn(
        `Tried to get <${this.uuid}> map, getter not yet implemented.`);
  };
  */


  tick() {
    super.tick();

    /*
    for (let place of this.places) {
      place.tick();
    };
    */

    this.calendar.tick();
  };

  /*
  getRandomPlace( { places = this.places, random_index = null } =
                  { places: this.places, random_index: null }) {
  */
  get random_place() {
    /*
    if (!random_index) {
      random_index = Math.floor(Math.random() * places.length);
    };
    */
    //random_index = Math.floor(Math.random() * places.length);
    //let random_index = Math.floor(Math.random() * this.places.length);
    /*
    let random_x = Math.floor(Math.random() * Object.keys(this.places).length);
    let random_y = Math.floor(Math.random() * Object.keys(this.places[0]).length);
    let places = this.places[random_x][random_y];
    */
    let place = this.getRandomTile();
    //let place = this.places[random_index];
    return place;
  };

  spawn({ class_name = 'Actor', constructor_parameters = {}} =
        { class_name: 'Actor', constructor_parameters: {}}) {
    let populant = new Populant({ class_name: 'Actor', constructor_parameters });
    //let populant = this.createDynamicPopulant(
    //    { class_name, constructor_parameters });
    //let place = this.getRandomPlace();
    let place = this.random_place;
    //place.population.push(populant);
    place.addContent(populant);
    return populant;
  };

};
