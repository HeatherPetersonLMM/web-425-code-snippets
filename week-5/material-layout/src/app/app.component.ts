import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styles: [
    `
      .parent { height: 100px; }
      .left { background-color: cyan; }
      .right { background-color: yellow; }
    `
  ],
  template: `
    <div class="parent" fxLayout="row">
      <div fxFlex class="left">Left</div>
      <div fxFlex class="right">Right</div>
    </div>
  `
})
export class AppComponent {
  title = 'app';
}
