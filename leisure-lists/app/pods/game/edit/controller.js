import Ember from 'ember';

export default Ember.Controller.extend({
  game: Ember.computed.alias('model'),
  userRating: function(){
  }.property('game', 'currentUser'),

  ratingsStars: function() {
    var rating = this.get("userRating");
    var stars = [{class: "star", value: 1},
                 {class: "star", value: 2},
                 {class: "star", value: 3},
                 {class: "star", value: 4},
                 {class: "star", value: 5}];
    for (var i = 0; i < rating; i++) {
      stars[i].class = "star-selected";
    }
    return stars.reverse();
  }.property("userRating"),
  save: function() {
    return this.get('game').save().then(function(){
      return this.transitionToRoute('game', this.get('game'));
    }.bind(this));
  },
  delete: function() {
    this.get('game').destroyRecord().then(function() {
      return this.transitionToRoute('games');
    }.bind(this));
  },

  actions: {
    addRating(rating) {
      return this.get('game').set('rating', rating);
    }
  }
});
