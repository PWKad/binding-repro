export class Welcome {
  public thing = { message: 'Welcome to the Aurelia Navigation App!' };

  setThing() {
    let newThing = { message: 'New message' };
    this.thing = newThing;
  }
}
