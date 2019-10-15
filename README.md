Version 0.0.1-5
Re-implement account/player creation/registration

===

Version 0.0.1-4
Re-implement loading player by account id

Version 0.0.1-3
Implement and use an either monad error handler

Introduces my first monad, in this case a result or either monad. I am using the Bad and Good class for the error/non-error abstraction. As part of this, introduced a good class (right), bad class (left), an either function, an ap function, a lift function, and other standard functions like map, join, and chain. I also added an "unwrap" function which will unrwap goods and bads (logging an error for the bads).

===

Version 0.0.1-2

Fix runSql not exporting anything causing authentication to fail.

===

Moved the old client directory to archive and created a new one.

(Re)adds a login form.

====


Version 0.0.0.0:

The big change in this build is to undo yesterday's start at converting the codebase to a functional declaritive style. Although I did learn a lot during the process that will help going forward, and want to use FP for other projects, I don't think it's going to be a good fit for this one because of performance and scale concerns. I think a game like this will best be represented by many indepedent objects interacting with one another rather than a flat input/output model.

More specifically, the approach I'm trying to take now is more of a "hybrid" model, which really just means using OOP features where it makes sense and FP where it makes sense to. The biggest change evident in this build is that classes are back but the methods have been externalized and reduced to functional, declaritive, unary constants.

Another leap forward for this build has been improved async understanding. For many functions which require asynchronous operation, rather than nesting callbacks I am now trying to await and return promises, which results in much more readable code.

This build, as part of a rewrite, contains many new or re-implemented entitites:


Logger: Provides a constructed winston logger with minimal configuration.

App: The App is used to declare express routing behavior. None of the endpoints in the current file are explicitly reimplented on the backend, and the client hasn't been updated at all yet.

Server: The server object is yielded from hooking the http module into the app object. The server is set to listen on 5000.

Session: An express-session object with basic configuration.

IO: This is provided by the socketIO module when given the server object. It is hooked into the shared_session module so that other objects can receive session data. It is passed to the game object for further editing.

Main: This is the file that contains the "key" components of the program, defined as those required to get the backend running. The main file builds the server object, the io object, and instantiates a new game.

Starter: This starts the entire process. Just a shell script that calls nodemon.js on the correct file (main).

incrementTickEpoch: constant unary function which increments the tick epoch property by 1 on a mutable.

tickThing: A constant unary function which calls incrementTickEpoch on a mutable object.

uuidv6: constant parameterless function that returns a short alphanumeric uuid;

createUuid: A constant unary function that takes a class name and returns it with a uuid from uuiv6 appended.

SocketMixin: A mixin class providing socket_id property

ProxyMixin: A mixin class that provides dot (.) behavior overrides and is currently logging all sets.

Thing: A base class which is constructed with a class name, uuid, name, and an initial ticks epoch value. It adopts tickThing and createUuid as methods, providing it's class name to createUuid.

runSql: An asynchronous constant unary function that takes an sql query as a string, connects using hardcoded settings to a Mysql database and provides the results inside of a returned promise.

getAccountIdFromUsername: A constant unary function that takes a username and returns a promise containing a matching account id using runSql.

getPlayerDataFromAccountId: A constant unary function that takes an account id and returns a promise containing matching player data.

connectPlayer: An incomplete asynchronous constant unary function that takes a socket and checks for a matching player based on the socket's session's username. If the player exists, it should load the player, otherwise it should create a new player and add it to the database.

Game: A game class that extends things and takes an IO object on instantiation and is constructed with an io, population, and players properties. Emits state across socket to all players every second. On receiving an IO connection, logs the connection and calls it's connectPlayer method, which is adopted from the connectPlayer function.


=====


Great things I've learned from:
  - https://blog.logrocket.com/elegant-error-handling-with-the-javascript-either-monad-76c7ae4924a1/
  - https://codeshack.io/basic-login-system-nodejs-express-mysql/
    Currently using this to figure out a basic authentication system.
  - https://hackernoon.com/how-to-build-a-multiplayer-browser-game-4a793818c29b
    Used this as a launching point to learn how to build an express server and app.
  - https://www.reddit.com/r/incremental_games/comments/ahf6nx/how_to_make_an_incremental_game/
    Great tutorial for simple idle game mechanics and helped me get back into Javascript.
