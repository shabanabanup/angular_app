import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  counterValue=1;
  countLessThenOne=true;

  count:number=1;

  //Receive the counterValue from counterchild
  decrement(){
    if(this.counterValue==1)
    {
      this.countLessThenOne=false;
    }
    else{
      this.countLessThenOne=true;
      this.counterValue--;
    }
    
  }

  increment(){
    this.counterValue++;
    this.countLessThenOne=true;
    
  }
 

}