/*global Backbone, require, sinon, describe, beforeEach, it, should */

var _ = require('underscore');
require('backbone');

var Model = require('model')(_.extend, Backbone.Events);

describe('model with events', function() {
  var model, spy;

  beforeEach(function() {
    model = new Model();
    spy = sinon.spy();
  });

  it('should trigger on set', function() {
    model.on('change', spy);
    model.set('name', 'Chris');

    spy.called.should.be.true;
  });

  it('should only trigger on change', function() {
    model.on('change', spy);
    model.set('name', 'Chris');
    model.set({ name: 'Chris' });

    spy.calledOnce.should.be.true;
  });

  it('should trigger with the changed properties', function(done) {

    model.on('change', function(changed, obj) {
      changed.name.should.equal('Richards');
      should.not.exist(changed.age);
      obj.should.equal(model);

      done();
    });

    model.set({
      name: 'Chris'
      , age: 30
    }, {silent: true});
    model.set('name', 'Richards');

  });
});