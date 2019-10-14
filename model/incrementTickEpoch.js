// vim: set ft=javascript:


// TODO: increment<generic> and then curry to this?
const incrementTickEpoch = mutable => {
  
  // TODO: use either monad for better error handling.
  const ticks_epoch = (mutable.ticks_epoch + 1)
    /*
    ? mutable.ticks_epoch + 1
    : 0;
    */
    //? good(mutable.ticks_epoch + 1)
    ? good(ticks_epoch)
    : bad(`Mutable object <${mutable}> has an invalid ticks_epoch value: <${mutable.ticks_epoch}>.`);
  either(ticks_epoch,
      function(value) {
        logger.error(value);
      },
      function(value) {
        mutable.ticks_epoch = ticks_epoch;
      }
  );
        
};


module.exports incrementTickEpoch;
