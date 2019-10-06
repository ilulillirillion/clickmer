import Thing from '../classes/Thing.js';


export default class MapRenderer extends Thing {
  constructor({ uuid = null, name = 'maprenderer',
                map = null } =
              { uuid: null, name: 'maprenderer',
                map: null }) {
    super({ uuid, name });

    this.map = map;

    let element = document.createElement('canvas');
    element.classList.add('map');
    this.element = element;

    this.context = this.element.getContext('2d');
    

  };

  render() {
    this.context.clearRect(0, 0, this.map.width, this.map.height);
    this.context.fillStyle = 'rgba(255,0,0,0.6)';
    for (let width=0; width < this.map.width; width++) {
      for (let height=0; hight < this.map.height; height++) {
        let tile = this.map.tiles[width][height];
        if (tile.fill) {
           
  }; 
};
