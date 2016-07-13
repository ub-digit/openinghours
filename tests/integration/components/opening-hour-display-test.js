import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('opening-hour-display', 'Integration | Component | opening hour display', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{opening-hour-display}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#opening-hour-display}}
      template block text
    {{/opening-hour-display}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
