import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('game');
  },

  renderTemplate: function() {
    return this.render('games.new', { into: 'application' });
  }
});
