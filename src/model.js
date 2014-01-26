/*global module */


// Triggers an event when attributes change using the set method.
//
// `extend` is a _.extend compatable function.
// `events` is a Backbone.Events compatable mixin.
module.exports = function(extend, events) {

  function Model() {
    this.props = {};
  }

  Model.prototype = {
    // Gets the value for attribute.
    get: function(name) {
      return this.props[name];
    }

    // Sets a hash of model attributes.
    // If a property is new/changed, fires the `('change', changedAttribues, model)` event.
    //
    // Possible options:
    //
    //     { silent: true }
    //
    , set: function(obj, options) {
      var props = obj;
      var didChange = false;
      var changed = [];
      var key;

      // support arguments:
      //
      //     (key, val, options)
      //     ({key: val}, options)
      //
      if (typeof obj === 'string') {
        props = {};
        props[obj] = options;
        options = arguments[2] || {};
      }

      for (key in props) {
        if (!props.hasOwnProperty(key)) {
          continue;
        }

        if (this.props[key] !== props[key]) {
          didChange = true;
          changed[key] = props[key];
        }
        this.props[key] = props[key];
      }

      // if there was a change, trigger the event
      if (this.trigger && didChange && !options.silent) {
        this.trigger('change', changed, this);
      }
    }
  };

  // If we have extend, try mixing in events
  if (extend) {
    extend(Model.prototype, events);
  }

  return Model;
}