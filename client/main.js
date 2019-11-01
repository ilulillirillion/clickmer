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

//import wrapped_console from '../library/wrapped_console.js';
import wrapped_console from './javascript/wrapped_console.js';

// Import Client to represent the client state.
import Client from './Client.js';
console.debug('Imported Client:', Client);

console.info('Running main.js');

wrapped_console.debug('test test test');


// Instantiate a client.
let client = new Client({ account_id: null });

console.info('Finished running main.js');
