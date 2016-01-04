import Ember from 'ember';

export default Ember.Mixin.create({
  redirectToLogin: function(){
    this.transitionTo('sign-in');
  },
  beforeModel: function(){
    this._super();
    var sessionId = this.get('cookie').getCookie('session_id');
    if (sessionId) {
      this.store.find('user', sessionId).then(function(user){
        this.set('currentUser', user);
        this.get('currentUser').set('sessionId', sessionId);
      }.bind(this),
      function(){
        this.redirectToLogin();
      }.bind(this));
    }
    else {
      this.redirectToLogin();
    }
  },
  setupController: function(controller, model){
    this._super(controller, model);
    controller.set('currentUser', this.get('currentUser'));
  }
});