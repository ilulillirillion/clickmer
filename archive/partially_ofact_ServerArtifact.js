// vim: set ft=javascript:

/**
 * file: clickmer/client/ServerArtifact.js
 * author: zolvaring
 * email: zolvaring@gmail.com
 * reference: https://github.com/zolvaring/clickmer
 **
 * Provides the ServerArtifact class.
 * ServerArtifacts are objects that exist on the client but is managed by the
 * server through mutation.
 * The ServerArtifact represents the state that the client things a given
 * object is in, and is also what the client sends to the server to be
 * validated. The server will respond with validation data and the client will
 * make sure ServerArtifacts are mutated accordingly.
 */

const ServerArtifact = (
      {
        account_id = null,
        socket_id = null
      } =
      {
        account_id: null,
        socket_id: null,
      }
    ) => {

  // Expose an account ID property.
  // Used by the client to quickly determine which account a given thing
  // belongs to.
  this.account_id = account_id;

  // Expose a socket ID property.
  // TODO: What is this used for?
  this.socket_id = socket_id;

  this.update 

}
