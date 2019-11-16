// vim: set ft=javascript:

/**
 * file: clickmer/client/main.js
 * author: zolvaring
 * email: zolvaring@gmail.com
 * reference: https://github.com/zolvaring/clickmer
 **
 * The main client script constructs a new client instance.
 * The client instance contains everything necessary for the game client.
 */



/*
// Import the wrapped console object for direct logging.
import wrapped_console from './jslib/wrapped_console.js';
// Import Client to represent the client state.
import Client from './Client.js';

console.info('Running main.js');

// Construct a player view container.
let player_view_container = document.createElement('div');
player_view_container.setAttribute('id', 'player_view_container');
document.body.appendChild(player_view_container);
// Construct a world view container.
let world_view_container = document.createElement('div');
world_view_container.setAttribute('id', 'world_view_container');
document.body.appendChild(world_view_container);

// Instantiate a client.
let client = new Client({ account_id: null });

console.info('Finished running main.js');
*/

console.info('Running main.js');
import ExampleClass from './ComposeTest.js';

let example_class = new ExampleClass('foo');
example_class.examplePublicMethod();  //  =>  'foo'
console.log('Got example class:', example_class);

example_class.example_imported_property = 'bar';
console.log('Mutated example class:', example_class);
example_class.examplePublicMethod();  //  =>  'bar'

// Should fail.
try {
  example_class.examplePrivateMethod();
  console.warn('Private method was accessed!');
} catch {}

example_class.examplePublicMethodToOverride();

example_class.examplePublicMethodForExoticOverride();
//  =>  before message, nested message, after message.


/*
const ObjectComposer = (...imported_properties) => 
  (mixin_properties) => {
    console.log('Running ObjectComposer.');
    console.log('Imported properties:', imported_properties);
    console.log('Mixin properties:', mixin_properties);
  }
}

const ExampleClass = ObjectComposer('example_imported_property')({
  examplePublicMethod() {
    console.log('Public method ran.');
  }
});
*/
