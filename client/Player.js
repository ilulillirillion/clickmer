// vim: set ft=javascript

/**
 *  file: clickmer/client/Player.js
 *  author: zolvaring
 *  email: zolvaring@gmail.com
 *  reference: https://github.com/zolvaring/clickmer
 **
 *  Dependencies:
 *    - clickmer/client/Vagile.js
 *    - clickmer/client/CanLog.js
 **
 *  Provides the Player class.
 *  Players are objects that represent actual human players.
 */

import Thing from './Thing.js';
import CanLog from './CanLog.js';
import Vagile from './Vagile.js';
import ServerManaged from './ServerManaged.js';

class Player extends ServerManaged(Vagile(CanLog(Thing))) {};

export default Player;
