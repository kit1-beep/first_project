import { Component } from '@angular/core';
import { RandomColor } from './ui/random-color.directive';
import { WelcomeComponent } from './ui/welcome.component';
import { ReversePipe } from './ui/reverse.pipe';

@Component({
  selector: 'app-home',
  template: `
  
    <p>I am the home component</p>
    <p randomColor>I am stylish</p>
    <p> helle there {{magic | reverse }}</p>
    <app-welcome></app-welcome>
  `,
  imports: [WelcomeComponent,RandomColor,ReversePipe],
})
export class HomeComponent {
  magic = 'hello there'
}