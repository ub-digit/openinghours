import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('opening-hour-day-row', 'Integration | Component | opening hour day row', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{opening-hour-day-row}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#opening-hour-day-row}}
      template block text
    {{/opening-hour-day-row}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
