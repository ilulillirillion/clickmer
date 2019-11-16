# Clickmer

## Description
---
A simple Javascript game with Node and Angular.

## Commit journal
---

### Commit 297
#### Add links for helpful composer references

Adds links to the following helpful references, which have heavily influenced
and guided development of the object composer:

https://raganwald.com/2016/07/20/prefer-composition-to-inheritance.html
http://raganwald.com/2015/12/28/mixins-subclass-factories-and-method-advice.html

### Commit 296
#### Better comments for the Object Compser

Add/rewrite comments in the Object Composer class for documentation and
readability.

### Commit 295
#### Working on object composition

A lot of work since the last update has gone into the continued refactor.
The primary workload since the last update has been building a new object
composer, which largely is working as of this commit, but still requires
some extending. The refactor is waiting on the object composer to be completed.

### Commit 294
#### Continue refactoring and compositionalizing

Significant progress on the ongoing refactor. Certain functions have been moved
into class mixins to provide more compositionality, and more elements have been
moved to a rudimentary custom library.
Most client and server objects should have their own interfaces for
communicating to their respective loggers, which should allow for logger
customization at the object level.

### Commit 293
#### Cleaning up and refactoring code.

Progress has been a little slower but has not halted the last couple of days,
another refactor has been going on behind the scenes that might be ready for
committing later today.

So far the improvements have continued to focus on client code and now include
better documentation and logging, some reorganization and is continuing to
benefit from the removal of deprecated code. Some lines are also being cleaned
up if they were violating some standard that I usually try to keep.

Added a new library directory, which contains generic modules that should be
portable beyond the project itself. These files may utlimately be converted
into an actual custom library but for now it is purely organizational. Lot's
of existing code could probably be moved partially to this new library, but
I'm not sure if that will ultimately be a part of this current refactor or not.

A new item as of the time of this journal that has been added into the library
is a generic mixin that provides the ability to log to a browser-provided
console using wrappers around the native functions, which has allowed togglable
logging and could provide further improvements in the future.

### Commit 292
#### Complete first stage of refactor

Restore parity with functionality prior to refactor.
Restores map rendering and player movement.
Restores the "axis_delta" movement system.
Applies the keyboard controllable mixin directly to the client.
The client modifies the movement of it's matching player on keystroke.

### Commit 291
#### WIP refactor of client/server state handling

A mid-way checkpoint of refactoring the client/server state code.
Map rendering and movement are currently broken.
Uses a new client object that updates its state from the server.
Plan to remove x_delta and y_delta and have client directly update its x and y.
The server will eventually run a function on its end to determine if clients
proposed x and y are valid and until then should just accept the proposed
values.

### Commit 290
#### Notably refactor client main, organize classes

Lifts a lot of code out of the player main file into dedicated class files.
Player now has a concept of an x_delta and y_delta, which represent the position difference in position the client has from it's last update from the server. On tick, the client sends this data to the server to be recorded before resetting the values.

As of right now player position is still authoritative and the server blindly takes and ap
plies the delta.

### Commit 289
#### Add crude player movement system

Adds a crude player movement system which will track the player as it moves about the map
.
Adds several mixins into the client, most notably a keyboard-controllable mixin that allows objects to respond to player keyboard input. The client tells the server where it has moved to each time the server ticks out to the client. This causes very slow rendering and still leaves unilateral position authority to the client. I hope to fix both of these problems by making a pass to clean-up and reorganize many of the recent updates in the next couple of commits.

### Commit 288
#### Render players on the map

The client takes player locations from state and draws them onto the map according to their `fill_style` properties.

### Commit 287
#### Trigger actions on console custom keyword input

Adds a "console" object to the main declarations and uses a giant if/else to catch the console input and execute a mapped command. Right now the following are available:

- `regenerate_tiles`: Recreates all of the map tiles.
- `logger_level_debug`: Sets log level to debug.
- `logger_level_info`: Sets log level to info.
- `logger_level_warn`: Sets log level to warn.
- `logger_level_error`: Sets log level to error.
- `logger_level_critical`: Sets log level to critical.
- `nolog`: Also sets log level to critical.

Also, the map no longer generates tiles on game startup. The game assumes that tiles are already created and waits for the admin to manually regenerate tiles with console if needed. Will consider adding in better logic so that the map will proactively recreate itself if certain conditions are met.

### Commit 286
#### Save map to database; build tiles on client

Map tiles are now generated on startup and stored in a MySQL database.
On tick, the game gathers player surroundings and sends them to each player so they can c
reate and draw tiles, reducing workload on the server.

The performance boost has been night and day, especially since this increasing the map size to 1000x1000. Overall we've gone from 23-25 seconds ticks before the player surroundings system, to about 10 seconds to tick before offloading map tiles to SQL, to 75ms ticks with a client connected. Also, saving the map tiles as SQL data took world gen from over 2 minutes to just over 30 seconds.

### Commit 285
#### Limit tiles sent to player based on location

During this commit I played around with increasing the map size and checking performance. I was able to create maps as large as 1000x1000 when increasing memory allocation on the server, but it was taking 23-25 seconds to tick the game world. I noticed that the majority of that time seemed to be in sending state to the player, so I looked at how I could reduce that. Now, when sending state, the game will create an instance of a special player state class, and instead of sending all of the tiles in the world to each player, will include only tiles relevant to that player in the player state object before sending it. Relevant tiles are chosen by proximity to the player and are retrieved from the Map class.

### Commit 284
#### Draw tile color based on tile type

Tiles can be broken down into types which can be walkable or not walkalble, and can give a saved rgb value to be drawn by the client.

### Commit 283
#### Conditionally draw tiles in map

Give tiles a walkable property. If a tile is not walkable, it is drawn on the map as a wall.
Also changed tiles to a list, and gave each tile a coordinate to remember it's own position in the map.

### Commit 282
#### Rough map demo

Construct an array of tiles on the server and send them to the client.
The client renders the tile data into a viewable map.

### Commit 281
#### Send new players with state, improve client react


Client-side react model is now closer to standard and flows much more smoothly.
Login process has been updated, client no longer requests a player, simply notifies server of it's successful connection. The server will then send state as usual and client will see it's player data in the state itself without having to explicitly request it.

### Commit 280
#### Test duplicating react renders

A test showing how to duplicate renders on React components (seems very simple).
Also cleaned up some old test logs and updated roadmap.

### Commit 279
#### Update player view on server game tick

Whenever the backend server game ticks, it emits state information to the player clients. On receiving this state information, the client will update any relevant views and then refresh virtual DOM elements with React.

### Commit 278
#### Switch from Angular to React

After reading about React it seemed like a purer solution for just updating view (I want to handle model) than using Angular, so I have gotten a small React class going in the test page showing the player object and name on login.

### Commit 277
#### Fix server responding before finishing player

I took a break from this project while I investigated design in C. While I am still interested in developing in C, I've decided to continue this project in Javascript.

In this commit I fixed an issue where the server would return an promise object instead of the actual player to the client, due to the response being sent before the server had fini
shed creating the player object.
