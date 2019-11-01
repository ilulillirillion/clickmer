// vim: set ft=javascript:

// TODO:  Set height/width dynamically, based on what the tiles sent from the
//        server.
// Expect React to be imported from HTML.
class WorldView extends React.Component {
  /*
  constructor({ tiles = [], players = [],
                width = null, height = null,
                tile_size = 8,
                fill_style = 'rgba(255, 0, 0, 0.6)' }) {
  */
  /*
  constructor(
      props = { tiles: [], players: [],
                width: null, height: null,
                tile_size: 8, 
                fill_style: 'rgba(255, 0, 0, 0.6)' }) {
  */
  constructor(
      props = { client: null,
                width: null, height: null,
                tile_size: 8, 
                fill_style: 'rgba(255, 0, 0, 0.6)' }) {
      /*
      { tiles: [], players: [],
        width: null, height: null,
        tile_size: 8, 
        fill_style: 'rgba(255, 0, 0, 0.6)' }) {
      /*
    /*
    let tiles = props.tiles;
    let players = props.players;
    super({ width: props.width, height: props.height,
            tile_size: props.tile_size, fill_style: props.fill_style });
    */
    super(props);

    /*
    this.state = {
      tiles: this.props.tiles,
      players: this.props.players,
      width: this.props.width,
      height: this.props.height,
      tile_size: this.props.tile_size,
      fill_style: this.props.fill_style
    }
    */

    /*
    this.state = { 
        tiles: props.tiles, 
        players: props.players,
        tile_size: props.tile_size,
        fill_style: props.fill_style
    }
    */
    console.warn('test89', this);
    /*
    this.state = {
      tiles: this.props.tiles, 
      players: this.props.players
    }
    */
  }

  componentDidMount() {
    console.info('WorldView mounted.', this);
    this.canvas = this.refs.canvas;
    this.ctx = this.canvas.getContext('2d');
    this.ctx.fillStyle = this.fill_style;
  }

  componentDidUpdate() {
    console.debug('Updating world view');
    this.draw();
  }

  draw() {
    console.debug('Drawing map.', this);
    this.ctx.rect(0, 0, this.props.width, this.props.height);
    this.ctx.clearRect(0, 0, this.props.width, this.props.height);
    // TODO: Is this if check still necessary?
    //if (this.state.tiles) {
    //  for (let tile of this.state.tiles) {
    //if (this.props.tiles) {

    //let player = this.props.client.getPlayer();
    let player = this.props.client.player;

    //if (this.props.client.player.surroundings) {
    if (player.surroundings) {
      //console.debug('Drawing tiles:', this.props.client.player.surroundings);
      console.debug('Drawing tiles:', player.surroundings);
      //for (let tile of this.props.tiles) {
      //for (let tile of this.props.client.player.surroundings) {
      for (let tile of player.surroundings) {
        //this.drawTile(tile);
        //FIXME: Can't just pass the tile here?
        this.drawTile(
          {
            fill_style: tile.fill_style,
            //fill_style: 'rgba(255, 0, 0, 0.6)',
            x: tile.x, y: tile.y
          }
        );
      }
    }
    if (this.props.client.players) {
      console.debug('Drawing players:', this.props.client.players);
      const players = Object.values(this.props.client.players);
      for (const player of players) {
        console.debug('Drawing player:', player);
        this.drawTile({
            fill_style: player.fill_style,
            x: player.x, y: player.y
        });
      }
    }


    /*
    // FIXME
    // TODO: Is this if check still necessary?
    if (this.props.players) {
      console.debug('Drawing players.');
      for (let player of this.props.players) {
        console.debug('Drawing player.', player);
        // TODO:  this is demo code and is not MP friendly, only the current
        //        player should have the delta applied.  
        //let x = player.x + this.state.x_delta;
        //let y = player.y + this.state.y_delta;
        let x = player.client_x;
        let y = player.client_y;
        this.drawTile(
            { 
              fill_style: player.fill_style,
              x: x, y: y
            });
      }
    }
    */
  }

  drawTile({ fill_style = null, x = 1, y = 1 }) {

    // TODO: Too verbose -- console.debug('Drawing tile with arguments:', arguments);

    //if (tile.fill_style) { this.ctx.fillStyle = tile.fill_style }
    //this.ctx.fillStyle = tile.fill_style || this.fill_style;
    this.ctx.fillStyle = fill_style || this.props.fill_style;
    //console.warn(`testfill <${fill_style}>`, this);
    //this.ctx.fillStyle = 'rgba(255, 0, 0, 0.6)'
    this.ctx.fillRect(
      //tile.x * this.props.tile_size,
      //tile.y * this.props.tile_size,
      x * this.props.tile_size,
      y * this.props.tile_size,
      this.props.tile_size, this.props.tile_size);
  }

  render() {
    return (
      React.createElement('canvas',
          // TODO: What is the point of passing width and height here?
          { ref: 'canvas', width: this.props.width, height: this.props.height }
      )
    );
  }

}

export default WorldView;
