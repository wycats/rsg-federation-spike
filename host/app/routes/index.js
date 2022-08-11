import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    console.log('HI');
    const child = await import('child/app');

    console.log('child', child);
  }
}
