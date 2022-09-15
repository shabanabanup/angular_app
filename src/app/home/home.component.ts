import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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

      "productname":"Laptop"

    },

    {

      "productname":"Mobile"

    },

    {

      "productname":"Head phones"

    },

    {

      "productname":"Footwear"

    },

    {

      "productname":"Washing machine"

    }

   ]

   //event to hide products

   isVisible:boolean=true;

   hide_products()

   {

    this.isVisible=!this.isVisible;

   }

   //*ngSwitch for laptop

   product = 'Laptop'
   errorcolor: string = 'red'

   //Array for style binding with ternary operator with ngSwitch
  //Array for style binding with ternary operator with ngSwitch

   
  ProductDetails = [
    {
      "pid":"100",
      "pname":"Kids Toys",
      "status":"Active",
      "color":"green"
      
    },
    {
      "pid":"101",
      "pname":"Headphones",
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
    {
      "pid":"106",
      "pname":"Laptop",
      "status":"Out of Stock",
      "color":"yellow"
      
    }
   ]
  
  ngOnInit(): void {

  }

 

}

  