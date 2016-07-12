import Ember from 'ember';

export default Ember.Component.extend({

  actions: {

    edit() {
      console.log('edit');
      this.get('data').set('isEdit', true);
    },

    save() {
      console.log('save from component');
      this.save(this.get('data'));
    },

    cancel() {
      this.cancel(this.get('data'));
    },


  }
});
