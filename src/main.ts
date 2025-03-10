import { Component, ElementRef, ViewChild, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { ParentComponent } from './parent/parent.component';

@Component({
  selector: 'app-root',
  imports: [ParentComponent],
  template: `
    <p>Components and directives have lifecycle hooks.</p>
    <p>Components have more lifecycle hooks than directives.</p>
    <ul>
      <li>ngOnInit: Both(It will only call once on initial load after ngOnChanges)</li>
      <li>ngOnChanges: Both(Call once before ngOninit and whenever data bound input properties change)</li>
      <li>ngDoCheck: Both</li>
      <li>ngAfterContentInit: Child Component(Will call at the time on content projection)</li>
      <li>ngAfterContentChecked: Child Component(Will call after ngAfterContentInit, ngDoCheck and on time of each content projection value change)</li>
      <li #after>ngAfterViewInit: Child Component(Will call after ngAfterContent, and once the view is initialized)</li>
      <li>ngAfterViewChecked: Child Component(Will call after ngAfterContent, and once the view is initialized and each change in view)</li>
      <li>ngDestroy: Both(It will be called just before component is removed from DOM)</li>
    </ul>
    <button (click)='onClick()'>Root Click</button>
    <p>This is gonna be a default change strategy. THis is gonna go from top to bottom</p>
    <app-parent />
  `,
})
export class App {
  name = 'Angular';
  @ViewChild('after') after!:ElementRef
  onClick(){
    console.log('Root Clicked');
    
  }
  ngOnInit(){
    console.log(this.after,"INIT");
  }

  ngAfterViewInit(){
    console.log(this.after,"AFTER VIEW");
    
  }
}

bootstrapApplication(App,{
  providers: [
    provideExperimentalZonelessChangeDetection()
  ]
});
