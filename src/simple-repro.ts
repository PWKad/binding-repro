import {bindable} from 'aurelia-framework';

export class SimpleRepro {
  @bindable public thing;
  @bindable public test = false;

  thingChanged(newValue) {
    console.log('simple repro')
    console.log(newValue)
  }
}
