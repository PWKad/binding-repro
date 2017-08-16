import {bindable} from 'aurelia-framework';

export class NestedEl {
  @bindable public thing;

  thingChanged(newValue) {
    console.log('nested el')
    console.log(newValue)
  }
}
