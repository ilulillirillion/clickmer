// vim: set ft=javascript:

import ServerArtifact from './ServerArtifact.js';
let socket = io();

/*
export default class Client {
  // TODO: handle uuid and name.
  constructor(
      { uuid = null, name = null, player = null, controller = null } =
      { uuid: null, name: null, player: null, controller: null }) {
    console.debug('Constructing a new Client.', arguments);

    this.player = player;

    this.controller = controller;
    if (!this.controller) { this.controller = new Controller() }

  }
};
*/

class Client {
  constructor(
      {
        account_id = null,
        //socket_id = null,
        //player = null,
        players = {}
      } = 
      {
        account_id: null,
        //socket_id: null,
        //player: null
        players: {}
      }
      ) {

    //this.account_id = account_id;
    this.players = players;

    // TODO: this is insecure
    this.account_id = account_id;

    if (!this.account_id) {
      let self = this;
      socket.emit('getid', function(response) {
        console.debug('getid response:', response);
        self.account_id = response;
      });
    }
      /*
      console.warn('test');
      socket.emit('getid', async function(response) {
        this.account_id = await new Promise((resolve, reject) => {
          try {
            resolve(response);
          } catch(error) {
            console.warn(error);
            reject(null);
          }
        });
        console.warn('Got account id', account_id);
      });
      */
       


  }

  get player() {
    console.debug(`Getting client player by account id <${this.account_id}>.`, this.players);
    let account_id = this.account_id;
    /*
    let player;
    for (let _player of Object.values(this.players)) {
      console.debug(`Checking <${this.account_id}> against <${_player.account_id}>`);
      if (_player.account_id === this.account_id) {
        console.debug('match');
        player = _player;
      }
    }
    */
    
    let player = Object.values(this.players).find(function(player) {
      return player.account_id === account_id;
    });

    console.debug('Returning client player.', player);
    return player;
    /*
    return (player)
      : player
      ? Object.values(this.players).find(function(player) {
          player.socket_id === this.socket.id;
        } 
    */
  }

  //requestAccountId() {
  //  socket.emit('

  //getAccountId() {
    

  update(authoritative_state) {
    console.debug('Updating Client.', socket.id);

    /*
    if (!this.account_id) {
      console.debug('Getting client account id', socket);
      let self = this;
      socket.emit('getid', async function(response) {
        let account_id = await response;
        console.debug('getid response:', account_id);
        self.account_id = account_id;
      });
    }
    */

    //const accounts = authoritative_state.accounts;
    const players = authoritative_state.players;

    // TODO: remove this, it's insecure.
    /*
    if (!this.account_id) {
      console.debug('Updating client account id');
      //this.account_id = accounts[this.socket.id];
      this.account_id = Object.values(players).find(function(player) {
        player.socket_id === socket.id;
      }).account_id;
    }
    */

    for (let [player_uuid, player_state] of Object.entries(players)) {
      if (!(player_uuid in this.players)) {
        this.players[player_uuid] = new ServerArtifact(player_state);
      }
      this.players[player_uuid].update(player_state);
    }
  }
    
      

  /*
  updateClient(
      { player_data = null } =
      { player_data: null }) {
    this._updatePlayer(player_data
  */
  //updateClient(server_update) {
    //this._updatePlayer(server_update.player);

  /*
  _updatePlayer(player_update) {
    this.player.updateClient(player_update);
  }
  */

  //_updatePlayers(players_update) {
    /*
    for (let player of this.players) {
      player.updateClient(p
    */
    //for (let player_update of players_update) {
      

}

export default Client;
