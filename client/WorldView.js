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
  constructor(
      props = { tiles: [], players: [],
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
    if (this.props.tiles) {
      console.debug('Drawing tiles.');
      for (let tile of this.props.tiles) {
        this.drawTile(tile);
      }
    }
    // TODO: Is this if check still necessary?
    if (this.props.players) {
      console.debug('Drawing players.');
      for (let player of this.props.players) {
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
  }

  drawTile({ fill_style = null, x = 1, y = 1 }) {
    //if (tile.fill_style) { this.ctx.fillStyle = tile.fill_style }
    //this.ctx.fillStyle = tile.fill_style || this.fill_style;
    this.ctx.fillStyle = fill_style || this.fill_style;
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
