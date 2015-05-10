/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';

// The Component annotation defines the <my-app></my-app> HTML tag
@Component({
  selector: 'my-app'
})

// The View annotation defines the inline template for the component
@View({
  template: '<h1>Hello {{ name }}</h1>'
})

// Component controller
class MyAppComponent {
  name: string;

  constructor() {
    this.name = 'Alice';
  }
}

bootstrap(MyAppComponent);
