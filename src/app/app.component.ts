import { Component } from '@angular/core';

@Component({
  selector: 'blep-code',
  template: `
    <div class="container-fluid">
      <h1>Blep Code</h1>
      <blepper-translator class="col-xs-12"></blepper-translator>
      <blepper-picker class="col-xs-12"></blepper-picker>
      <blepper-input class="col-xs-12"></blepper-input>
    </div>
  `
})
export class AppComponent {}
