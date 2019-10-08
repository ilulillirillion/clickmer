// vim: set ft=javascript


import Actor from '../classes/Actor.js';


export default class WrappedActor extends Actor {
  constructor({ uuid = null, name = 'actor', sex = null } =
              { uuid: null, name: 'actor', sex: null }) {
    super({ uuid, name, sex });

    this.fill_statistics();
