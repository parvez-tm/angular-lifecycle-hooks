import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ContentChild, Input, SimpleChange, input } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-child',
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {

  @ContentChild('element') element:any
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
    console.log(this.element,'Do Check');
    
  }

  ngAfterContentInit(){
    console.log(this.element,'After Content Init');
  }

  ngAfterContentChecked(){
    console.log('After Checked');
  }


  onClick(){
    this.testArr().push('LOL')
    console.log('Clicked', this.testArr());
    
  }
}
