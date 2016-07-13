import Ember from 'ember';
import moment from 'moment';

export default Ember.Controller.extend({

  nextSevenDays: [],


  init() {
    for (var i = 0; i < 7; i++) {
      this.get('nextSevenDays').push(moment().add(i, 'days'));
    }
  },

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
