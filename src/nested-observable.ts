import {bindable} from 'aurelia-framework';

export class NestedObservable {
  @bindable public thing;

  thingChanged(newValue) {
    console.log('nested bindable')
    console.log(newValue)
  }
}
