import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | bachiller', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:bachiller');
    assert.ok(route);
  });
});
