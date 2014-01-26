/*global module */


module.exports = function(extend) {

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

  return Model;
}