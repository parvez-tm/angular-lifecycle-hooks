import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, SimpleChange, input } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-child',
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {

  firstName = input<string>();
  age = input(0); 
  testArr = input<any[]>([]);
  constructor(
    private ref: ChangeDetectorRef
    ){
    console.log(this.age(),"age");  //first call
  }

  ngOnChanges(changes:SimpleChange){
    console.log(changes,"Asd"); // second call
    
  }

  ngOnInit(){
    console.log(this.firstName(),"firstName"); //third call
    
  }

  ngDoCheck(){
    this.ref.markForCheck(); //Mannually checking change detection as i used onpush

    console.log('Child Component');
    
  }

  onClick(){
    this.testArr().push('LOL')
    console.log('Clicked', this.testArr());
    
  }
}
