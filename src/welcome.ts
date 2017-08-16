import {WelcomeBase} from './welcome-base';

export class Welcome extends WelcomeBase {
  public thing;
  test = false;

  constructor() {
    super(arguments);
  }
  activate(params) {
    console.log('activating')
    super.activate(params);
    console.log('setting')
    this.test = true;
  }
  setThing() {
    let newThing = { message: 'New message' };
    this.thing = newThing;
  }
}
