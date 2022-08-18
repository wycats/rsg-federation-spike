import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ChildAppService extends Service {
  @tracked app = null;

  constructor(...args) {
    super(...args);

    this.boot();
  }

  async boot() {
    console.log('service: booting');
    const ChildApp = (await import('child/app')).default;
    console.log('service: ChildApp', ChildApp);
    const ChildAppInstance = ChildApp.create({
      rootElement: '#child-mount',
    });
    ChildAppInstance.deferReadiness();
    // const child = new ChildApp();
    const child = await ChildAppInstance.visit('/', {
      location: 'none',
      rootElement: '#child-mount',
      // autoboot: false,
    });
    window.child = child;
    // ChildAppInstance.advanceReadiness();
    // debugger;
    console.log('service: visited child', child);
    this.app = child;
  }
}
