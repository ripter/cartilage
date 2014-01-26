/*global require, describe, beforeEach, it, should */

var _ = require('underscore');
var Model = require('model')(_.extend);

describe('model with _.extend', function() {
  var model;

  beforeEach(function() {
    model = new Model();
  });

  it('should update on set', function() {
    model.set('fullName', 'Chris Richards');
    model.set({
      first: 'Chris'
      , last: 'Richards'
    });

    model.get('fullName').should.equal('Chris Richards');
    model.get('last').should.equal('Richards');
  });
});