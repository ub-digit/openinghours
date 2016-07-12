import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import Ember from 'ember';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({

  rule: belongsTo('rule'),
  closed: attr('boolean'),
  openingTime: attr('string'),
  closingTime: attr('string'),
  dayOfWeekIndex: attr('number'),

  isEdit: false,

  isEditing: Ember.computed.or('isNew', 'isEdit'),

  days: [
    {index: 0, name: 'Måndag'},
    {index: 1, name: 'Tisdag'},
    {index: 2, name: 'Onsdag'},
    {index: 3, name: 'Torsdag'},
    {index: 4, name: 'Fredag'},
    {index: 5, name: 'Lördag'},
    {index: 6, name: 'Söndag'}
  ],

  dayString: Ember.computed('dayOfWeekIndex', function() {
    return this.get('days').findBy('index', this.get('dayOfWeekIndex')).name;
  }),

  availableDays: Ember.computed('rule.openingHours.@each.dayOfWeekIndex', function() {
    var daysInRules = this.get('rule.openingHours').mapBy('dayOfWeekIndex');
    var a = this.get('days').reject(function(day) {
      return daysInRules.contains(day.index);
    });
    return a;
  })

});
