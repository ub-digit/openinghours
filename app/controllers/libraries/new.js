import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {

    saveLibrary(record) {
      console.log('save from controller');
      record.save().then(() => {
        record.set('isEdit', false);
        this.transitionToRoute('libraries.index');
      });
    },
    cancelEditLibrary(record) {
      this.transitionToRoute('libraries');
    }
  }
});
