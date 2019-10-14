// vim: set ft=javascript:


const uuidv6 = require('./uuidv6.js');
const { either, good, bad } = require('./eitherMonad.js');


  /*
  createUuid(
      { class_name = this.class_name } =
      { class_name: this.class_name }) {
    // TODO: an either monad should go here...?
    return (class_name) ? `${class_name}_${uuidv6()}` : `error_${uuidv6()}`;
  };
  */

const createUuid = class_name => {

  let uuid = uuidv6();
  uuid = (uuid)
    ? good(`${class_name}_${uuid}`)
    : bad(`Unable to generate a UUID! Using class name (<${class_name}>.`);
  uuid = either(uuid,
    function(value) { logger.error(value); return class_name },
    function(value) { return value }
  );
  //logger.warn(uuid);
  return uuid;
      

/*
  let uuid = (class_name) 
    //? `${class_name}_${uuidv6()}`
    //: `error_${uuidv6()}`
    ? good(`${class_name}_${uuidv6()}`)
    //: bad(`Invalid class_name: <${class_name}>`);
    : logger.error(`Invalid class name: <${class_name}>.`);
      uuid = uuidv6()
      uuid = (uuid)
      ? good(uuid)
      : bad(`Unexpected exception occurred while executing uuid function.`);
  either(uuid,
*/
};


module.exports = createUuid;
