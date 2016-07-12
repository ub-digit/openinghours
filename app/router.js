import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('libraries', function() {
    this.route('new');
    this.route('show', {path: ':library_id'}, function() {
      this.route('rules', {resetNamespace: true}, function() {
        this.route('new');
        this.route('show', {path: ':rule_id'});
      });
    });
  });
});

export default Router;
