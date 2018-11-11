import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | route-declaracion', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:route-declaracion');
    assert.ok(route);
  });
});
