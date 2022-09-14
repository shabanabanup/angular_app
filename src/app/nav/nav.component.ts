import { Component, OnInit } from '@angular/core';

 

@Component({

  selector: 'app-nav',

  templateUrl: './nav.component.html',

  styleUrls: ['./nav.component.css']

})

export class navComponent implements OnInit {

 

  constructor() { }

  name="JOHN"
  
   //Array - *ngFor

   //key:value

   products:any[]=[

    {

      "productname":"kids Dress"

    },

    {

      "productname":"kids Toys"

    },

    {

      "productname":"Kids Bags"

    },

    

    {

      "productname":"Footwear"

    },

   

   ]

   //event to hide products

   isVisible:boolean=true;

   hide_products()

   {

    this.isVisible=!this.isVisible;

   }

   //*ngSwitch for laptop

   product = 'Laptop'
   

   //property errorcolor for style binding using ternary operator
   errorcolor:string='red'

   //Array for style binding with ternary operator with ngSwitch

   ProductDetails=[
    {
      "pid":"100",
      "pname":"Kids Toys",
      "status":"Active",
      "color":"green"
    },
    {
      "pid":"101",
      "pname":"kids bags",
      "status":"InActive",
      "color":"red"
    },
    {
      "pid":"102",
      "pname":"Kids Dress",
      "status":"Out of Stock",
      "color":"yellow"
    },
    {
      "pid":"103",
      "pname":"Kids Books",
      "status":"Active",
      "color":"green"
    },
    {
      "pid":"104",
      "pname":"Kids Crayons",
      "status":"InActive",
      "color":"red"
    },
    {
      "pid":"105",
      "pname":"Footwear",
      "status":"Active",
      "color":"green"
    },
    
   ]

      //Style Binding using a function
      getColor()
      {
        return 'blue';
      }
      //ngClass


  ngOnInit(): void {

  }


 

}
class products{
  blue:boolean=true;
  shadow:boolean=true;
  
}