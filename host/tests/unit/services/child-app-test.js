import { module, test } from 'qunit';
import { setupTest } from 'host/tests/helpers';

module('Unit | Service | child-app', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:child-app');
    assert.ok(service);
  });
});
