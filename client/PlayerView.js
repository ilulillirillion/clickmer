// vim: set ft=javascript:

import ControllableViewMixin from './ControllableViewMixin.js';
import KeyboardControllableMixin from './KeyboardControllableMixin.js';

// Assume React will be imported in HTML
//class PlayerView extends ControllableViewMixin(KeyboardControllableMixin(React.Component)) {
class PlayerView extends React.Component {
  //constructor(props) {
  constructor(
      /*
      props = { 
          account_id: null, uuid: null,
          name: 'player_view', ticks_epoch: 0,
          initial_x: 1, initial_y: 1
      }) {
      */
      props = { player: null }) {
    super(props);
    //this.state = { player: props.player_seed };
    //this.state = { x: this.props.initial_x, y: this.props.initial_y }
    //this.props = {};

    //this.state = { x_delta: 0, y_delta: 0 };
  }

  componentDidMount() {
    console.debug('PlayerView component mounted');
  }

  render() {
    return (
      React.createElement('div', {},
        //React.createElement('p', {}, `player name: ${this.state.player.name}`),
        //React.createElement('p', {}, `player ticks: ${this.state.player.ticks_epoch}`)
        //React.createElement('p', {}, `player name: ${this.state.player.name}`),
        //React.createElement('p', {}, `player ticks: ${this.state.player.ticks_epoch}`)
        React.createElement('p', {}, `player name: ${this.props.player.name}`),
        React.createElement('p', {}, `player ticks: ${this.props.player.ticks_epoch}`)
      )
    );
  }

}

export default PlayerView;
