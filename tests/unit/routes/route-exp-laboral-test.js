import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | route-exp-laboral', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:route-exp-laboral');
    assert.ok(route);
  });
});
