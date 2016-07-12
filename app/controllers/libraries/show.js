import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {

    saveLibrary(record) {
      console.log('save from controller');
      record.save().then(() => {
        record.set('isEdit', false);
      });
    },
    cancelEditLibrary(record) {
      record.set('isEdit', false);
      record.rollbackAttributes();
    }

  }
});
