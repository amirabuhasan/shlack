import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class LoginFormComponent extends Component {
  @tracked userId = null;
  @service auth;

  get isDisabled() {
    return !this.userId;
  }

  onLoginFormSubmit = evt => {
    const { target } = evt;
    evt.preventDefault();
    const val = target.querySelector('select').value;
    this.auth.loginWithUserId(val);
  };

  onSelectChanged = evt => {
    const { value } = evt.target;
    this.userId = value;
  };
}
