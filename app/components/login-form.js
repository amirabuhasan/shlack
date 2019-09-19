import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class LoginFormComponent extends Component {
  @tracked userId = null;

  get isDisabled() {
    return !this.userId;
  }

  loginAsUserWithId = val => {
    console.log(val);
  };

  onLoginFormSubmit = evt => {
    const { target } = evt;
    evt.preventDefault();
    const val = target.querySelector('select').value;
    this.loginAsUserWithId(val);
  };

  onSelectChanged = evt => {
    const { value } = evt.target;
    this.userId = value;
  };
}
