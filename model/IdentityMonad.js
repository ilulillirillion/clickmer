// vim: set ft=javascript:


// TODO: can this be expressed as an arrow function?
function Identity(value) {
    this.value = value;
}

Identity.prototype.bind = function(transform) {
    return transform(this.value);
};

Identity.prototype.toString = function() {
    return 'Identity(' + this.value + ')';
};


module.exports = Identity;
