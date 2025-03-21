import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgTemplateOutlet } from '@angular/common';
@Component({
  selector: 'app-welcome',
  imports: [],
  template: `
    
      <button (click)="handleClick($event)">click me</button> 
      <p>Hi, {{name}}</p>
      <input [value]="name" />
      
      <p #myParagraph></p>
      <button (click)="myParagraph.innerHTML = 'Once upon a time...'">Click me</button>
      <div RandomColor>
          <p >this is a test</p>
        </div>
      <ng-template #myTemplate let-greeting="greeting">
        <p>{{greeting}} there</p>
      </ng-template>

      <ng-container *ngTemplateOutlet="myTemplate; context { greeting: 'Hi'}"></ng-container>
      <ng-container *ngTemplateOutlet="myTemplate; context { greeting: 'Hello'}"></ng-container>
      <ng-container *ngTemplateOutlet="myTemplate; context {greeting: 'Yo'}"></ng-container>
  `,
  styles: ``
})
export class WelcomeComponent {
  handleClick(ev: MouseEvent ) {
    console.log('I was clicked!');
    console.log(ev);
  }
  firstName = "kyle";
  name = "kyle";
}
