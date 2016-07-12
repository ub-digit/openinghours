import Ember from 'ember';

export default Ember.Component.extend({

  actions: {

    edit() {
      console.log('edit');
      this.get('data').set('isEdit', true);
    },

    save() {
      console.log('save from component');
      console.log(this.get('data'));
      this.save(this.get('data'));
    },

    cancel() {
      console.log('cancel from component');
      this.cancel(this.get('data'));
    },
  }
});
