// vim: set ft=javascript:

class ServerArtifact {
  constructor(
      {
        account_id = null,
        socket_id = null,
        uuid = null,
        name = 'server_artifact',
        ticks_epoch = 0,
        x = 1,
        y = 1
      } =
      {
        account_id: null,
        socket_id: null,
        uuid: null,
        name: 'server_artifact',
        ticks_epoch: 0,
        x: 1,
        y: 1
      }
      ) {
    console.debug('Constructing a new ServerArtifact.', arguments);

    this.account_id = account_id;
    this.socket_id = socket_id;
    this.uuid = uuid;
    this.name = name;
    this.ticks_epoch = ticks_epoch;
    this.x = x;
    this.y = y;

  }

  update(
      {
        account_id = this.account_id || null,
        socket_id = this.socket_id || null,
        uuid = this.uuid || null,
        name = this.name || 'server_artifact',
        ticks_epoch = this.ticks_epoch || 0,
        x = this.x || 1,
        y = this.y || 1
      } = {
        account_id: this.account_id || null,
        socket_id: this.socket_id || null,
        uuid: this.uuid || null,
        name: this.name || 'server_artifact',
        ticks_epoch: this.ticks_epoch || 0,
        x: this.x || 1,
        y: this.y || 1
      }) {
    this.account_id = account_id;
    this.socket_id = socket_id;
    this.uuid = uuid;
    this.name = name;
    this.ticks_epoch = ticks_epoch;
    this.x = x;
    this.y = y;
  }

}

export default ServerArtifact;
