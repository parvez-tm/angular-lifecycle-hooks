import { Component, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { ParentComponent } from './parent/parent.component';

@Component({
  selector: 'app-root',
  imports: [ParentComponent],
  template: `
    <button (click)='onClick()'>Root Click</button>
    <p>This is gonna be a default change strategy. THis is gonna go from top to bottom</p>
    <app-parent />
  `,
})
export class App {
  name = 'Angular';

  onClick(){
    console.log('Root Clicked');
    
  }
}

bootstrapApplication(App,{
  providers: [
    provideExperimentalZonelessChangeDetection()
  ]
});
