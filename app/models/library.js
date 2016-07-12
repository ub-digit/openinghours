import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import Ember from 'ember';
import {hasMany} from 'ember-data/relationships';

export default Model.extend({

  rules: hasMany('rule'),

  nameSv: attr('string'),
  nameEn: attr('string'),
  sigel: attr('string'),

  isEdit: false,
  isEditing: Ember.computed.or('isNew', 'isEdit')


});
