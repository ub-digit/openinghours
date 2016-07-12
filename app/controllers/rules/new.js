import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    saveRule(record) {
      record.save().then(() => {
        record.set('isEdit', false);
        this.transitionToRoute('rules');
      });
    },

    cancelEditRule(record) {
      this.transitionToRoute('rules');
    }
  }
});
