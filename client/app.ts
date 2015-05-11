/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';

// The Component annotation defines the <my-app></my-app> HTML tag
@Component({
  selector: 'my-app'
})

// The View annotation defines the inline template for the component
// You can use an external template by specifying a 'templateUrl' and giving it the path to an HTML file
@View({
  template: `
    <h1>Hello {{ name }}</h1>
  `
})

// Component controller
class MyAppComponent {
  name: string;

  constructor() {
    this.name = 'Alice';
  }
}

bootstrap(MyAppComponent);
