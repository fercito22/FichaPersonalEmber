import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | pruebas-estilos', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:pruebas-estilos');
    assert.ok(route);
  });
});
