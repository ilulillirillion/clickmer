// vim: set ft=javascript:


// TODO: increment<generic> and then curry to this?
const incrementTickEpoch = mutable => {
  
  // TODO: use either monad for better error handling.
  mutable.ticks_epoch = (mutable.ticks_epoch)
    ? mutable.ticks_epoch + 1
    : 0;

};


module.exports incrementTickEpoch;
