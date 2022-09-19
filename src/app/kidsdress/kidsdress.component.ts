import { Component, OnInit } from '@angular/core';
import * as productdetails from '../data/kidsdress.json';

@Component({
  selector: 'app-kidsdress',
  templateUrl: './kidsdress.component.html',
  styleUrls: ['./kidsdress.component.css']
})
export class KidsdressComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  kidsdress:any = (productdetails as any).default;
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
