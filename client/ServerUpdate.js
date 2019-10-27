// vim: set ft=javascript:

class ServerUpdate {
  constructor(
      {
        player = null
      } = 
      {
        player: null
      }
      ) {
    console.debug('Constructing a new ServerUpdate object.');
    this.player = player;
  }
}

export default ServerUpdate;
