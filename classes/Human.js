//import Actor from './actor.js';
import Actor from '../classes/Actor.js';


export default class Human extends Actor {

  constructor() {
    super();
    /* https://medicalxpress.com/news/2015-12-humans-survive-food.html
    Humans can survive for about 50 days without food. */
    //this.statistics.hunger.current = 4320000;
    //this.statistics.hunger.max = 4320000;

    this.sex = 'male';
  };



/*
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

*/


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

/*

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

*/

};
