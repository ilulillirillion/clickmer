// vim: set ft=javascript:

/**
 *  file: clickmer/client/ServerArtifact.js
 *  author: zolvaring
 *  email: zolvaring@gmail.com
 *  reference: https://github.com/zolvaring/clickmer
 **
 *  Dependencies:
 *    - CanLog
 *        - CanConsoleLog
 *    - Drawable
 *    - ServerManaged
 **
 *  Provides the ServerArtifact class.
 *  ServerArtifacts exist on the client but are managed by the server through
 *  calls to the ServerManaged update function. ServerArtifacts are expected
 *  to also by drawable, and to have configurable access to an interface with 
 *  the console logger.
 *  The ServerArtifact delta values represent a difference in state between
 *  the client and the server. 
 *  The client will trust it's own data wherever
 *  it is feasible for it to do so, in order to reduce latency.
 *  The client will routinely send this delta data to the server before
 *  resetting it, allowing the server to maintain periodic authority over the
 *  state of the client by updating the ServerArtifact on response.
 */

/**
 *  Constructs a ServerArtifact.
 */
class ServerArtifact extends ServerManaged(Drawable(CanLog(Thing))) {}

export default ServerArtifact;
