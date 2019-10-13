// vim: set ft=javascript:


const uuidv6 = require('./uuidv6.js');


  /*
  createUuid(
      { class_name = this.class_name } =
      { class_name: this.class_name }) {
    // TODO: an either monad should go here...?
    return (class_name) ? `${class_name}_${uuidv6()}` : `error_${uuidv6()}`;
  };
  */

const createUuid = class_name => {
  return (class_name) 
    ? `${class_name}_${uuidv6()}`
    : `error_${uuidv6()}`
};


module.exports = createUuid;
