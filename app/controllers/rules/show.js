import Ember from 'ember';

export default Ember.Controller.extend({

  openingHoursSorting: ['dayOfWeekIndex'],
  sortedOpeningHours: Ember.computed.sort('model.openingHours', 'openingHoursSorting'),

  actions: {

    addOpeningHour() {
      if (this.get('model.canCreateNewDay'))   {
        var newObj = this.store.createRecord('openingHour', {rule: this.get('model')});
        this.get('model').get('openingHours').pushObject(newObj);
      }
    },

    saveRule(record) {
      record.save().then(() => {
        record.set('isEdit', false);
      });
    },

    cancelEditRule(record) {
      record.set('isEdit', false);
    }

  }
});
