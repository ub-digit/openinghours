import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {

    delete(record) {

      record.destroyRecord();

    }

  }
});
