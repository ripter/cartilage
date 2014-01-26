/*global require, describe, beforeEach, it, should */

var extend = require('extend');
var Model = require('model')(extend);

describe('model', function() {
  var model;

  beforeEach(function() {
    model = new Model();
  });

  it('should set a single value', function() {
    model.set('chris', 'richards');
    model.props.chris.should.equal('richards');
  });

  it('should get a value', function() {
    model.set('chris', 'richards');
    model.get('chris').should.equal('richards');
  });

  it('should set object of valies', function() {
    model.set({
      first: 'Chris'
      , last: 'Richards'
    });

    model.get('first').should.equal('Chris');
    model.get('last').should.equal('Richards');
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

  it('should update an item', function() {
    model.set('name', 'Chris');
    model.set('name', 'Richards');

    model.get('name').should.equal('Richards');
  });

  describe('two models', function() {
    var model2;

    beforeEach(function() {
      model2 = new Model();
    });

    it('should keep unique instance', function() {
      model.set('chris', 'richards');
      model2.set('pet', 'dog');

      should.not.exist(model.get('pet'));
      should.not.exist(model2.get('chris'));
    });
  });
});