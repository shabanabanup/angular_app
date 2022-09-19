import { Component, OnInit } from '@angular/core';
import * as productdetails from '../data/toys.json';
@Component({
  selector: 'app-kidstoys',
  templateUrl: './kidstoys.component.html',
  styleUrls: ['./kidstoys.component.css']
})
export class KidstoysComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
  }
  kidstoys:any = (productdetails as any).default;
  productDetail=false;
  //Event to perform the toggle effect
  showproductDetailsToggle()
  {
    this.productDetail=!this.productDetail;
  }
  //function to toggle between the span content from + to - and vice versa
  //and bind the function to [ngClass]
  toggleContent(){
    var content='';
    if(this.productDetail){
      content='fa-solid fa-arrow-up';
    }
    else{
      content='fa-solid fa-arrow-down';
    }
    return content;
  }

}

