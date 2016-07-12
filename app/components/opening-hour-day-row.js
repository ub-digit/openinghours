import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'tr',

  actions: {

    edit(record) {
      record.set('isEdit', true);
    },

    cancel(record) {
      record.set('isEdit', false);
      record.rollbackAttributes();
    },

    save(record) {
      record.save().then(() => {
        record.set('isEdit', false);
      });
    },
    delete(record) {
      record.destroyRecord();
    }

  }
});
