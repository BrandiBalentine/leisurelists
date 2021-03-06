import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    return this.modelFor('game');
  },

  renderTemplate: function() {
    return this.render('game.edit', { into: 'application' });
  },

  actions: {
    willTransition: function() {
      if (this.get('currentModel')){
        return this.get('currentModel').rollbackAttributes();
      }
    }
  }
});
