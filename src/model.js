/*global module */


function Model() {
  this.props = {};
}

Model.prototype = {
  get: function(name) {
    return this.props[name];
  }
  , set: function(name, val) {
    var props = name;
    if (typeof name === 'string') {
      props = {};
      props[name] = val;
    }

    extend(this.props, props);
  }
};

module.exports = Model;

function extend(dest) {
  var args = Array.prototype.slice.call(arguments, 1);
  var i, len, name;

  for (i=0, len = args.length; i < len; i++) {
    for (name in args[i]) {
      dest[name] = args[i][name];
    }
  }

  return dest;
}
