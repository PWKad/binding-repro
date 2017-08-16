export class Welcome {
  public thing;
  test = false;

  activate(params) {
    console.log('activating')
    this.test = true;
  }
  setThing() {
    let newThing = { message: 'New message' };
    this.thing = newThing;
  }
}
