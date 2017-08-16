import {bindable} from 'aurelia-framework';

export class SimpleRepro {
  @bindable public thing;
  @bindable public test = true;

  testing() {
    this.test = true;
  }
  thingChanged(newValue) {
    console.log('simple repro')
    console.log(newValue)
  }
}
