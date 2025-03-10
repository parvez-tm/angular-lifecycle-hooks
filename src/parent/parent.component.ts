import { Component, signal } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  count = signal(1)
  testArr = signal<any[]>([])
  onClick(){
    this.testArr().push('Parent LOL')
    console.log('Clicked');
    this.count.update(data=>data+1)
  }

  ngDoCheck(){
    console.log('Parent Component');
    
  }

}
