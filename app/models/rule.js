import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import Ember from 'ember';
import {belongsTo, hasMany} from 'ember-data/relationships';

export default Model.extend({

  library: belongsTo('library'),
  openingHours: hasMany('openingHour'),

  nameSv: attr('string'),
  nameEn: attr('string'),
  descriptionSv: attr('string'),
  descriptionEn: attr('string'),
  ruletype: attr('string'),
  startdate: attr('date'),
  enddate: attr('date'),

  canCreateNewDay: Ember.computed('openingHours.@each.isNew', function() {
    var newOpeningHours = this.get('openingHours').filterBy('isNew', true);
    return !(newOpeningHours.length) && this.get('openingHours.length') < 7;
  }),

  isEdit: false,
  isEditing: Ember.computed.or('isNew', 'isEdit')

});
