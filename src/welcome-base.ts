export class WelcomeBase {
  public thing;
  test = false;

  constructor(args) {
  }
  activate(params) {
    console.log('activating')
  }
  setThing() {
    let newThing = { message: 'New message' };
    this.thing = newThing;
  }
}
