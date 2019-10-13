// vim: set ft=javascript:


//function uuidv6() {
const uuidv6 = () => {
  return 'xxxxxxx'.replace(/[xy]/g, function(c) {
    let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};


module.exports = uuidv6;
