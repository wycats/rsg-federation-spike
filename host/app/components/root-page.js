import Component from '@glimmer/component';
import { service } from '@ember/service';

export default class extends Component {
  @service childApp;
}
