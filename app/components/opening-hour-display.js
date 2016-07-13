import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  init() {

    console.log("component init");
    this._super();

  },

  openingHour: Ember.computed('date', function() {

    var filterObj = {
      library: this.get('library.id'),
      date: this.get('date').format('YYYY-MM-DD')
    };
    console.log(filterObj);
    return this.get('store').query('opening-hour', {filter: filterObj});

  })


});
