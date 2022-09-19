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

      "productname":"kids bags"

    },

    {

      "productname":"kids bottol"

    },

    {

      "productname":"kids blanket"

    },

    {

      "productname":"kids footwere"

    },

    {

      "productname":"kids products"

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
      "pname":"Kids dress",
      "status":"Active",
      "img":"https://i.pinimg.com/736x/c7/ad/82/c7ad82ac3f83a6260ad0cfa981fee496.jpg",
      "color":"green"
    
      
      
    },
    {
      "pid":"101",
      "pname":"kids toys",
      "status":"InActive",
      "img":"https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/15129300/2021/8/12/06a8a942-609d-455d-86b2-2df3ef17c38e1628777117218SoftToysandDolls1.jpg",
      "color":"red"
      
    },
    {
      "pid":"102",
      "pname":"Kids bags",
      "status":"Out of Stock",
      "img":"https://rukminim1.flixcart.com/image/416/416/k7m8brk0/bag/g/a/g/avengers-super-heroes-marvel-30-original-imafpt9fyeazy3gf.jpeg?q=70",
     "color":"yellow"
      
    },
    {
      "pid":"103",
      "pname":"Kids story books",
      "status":"Active",
      "img":"https://images.unsplash.com/photo-1533561304446-88a43deb6229?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpbGRyZW4lMjBib29rc3xlbnwwfHwwfHw%3D&w=1000&q=80",
      "color":"green"
     
    },
    {
      "pid":"104",
      "pname":"Kids Crayons",
      "status":"InActive",
      "img":"https://m.media-amazon.com/images/I/610bRJODYEL._AC_UL320_.jpg",
      "color":"red"
      
    },
    {
      "pid":"105",
      "pname":"kids Footwear",
      "status":"Active",
      "img":"https://www.famousfootwear.ca/blob/product-images/21000/71/24/25/712425_pair_medium.jpg",
      "color":"green"
      
    },
    {
      "pid":"106",
      "pname":"kids food",
      "status":"Out of Stock",
      "img":"https://m.media-amazon.com/images/I/712nf+Oss3L._AC_UL320_.jpg",
      "color":"yellow"
      
    },
    {
      "pid":"107",
      "pname":"kids product",
      "status":"Active",
      "img":"https://i.pinimg.com/originals/b1/b3/13/b1b3131daeba77471b55e60a4996c3fe.png",
      "color":"green"
      
    },
    {
      "pid":"108",
      "pname":"kids blanket",
      "status":"Out of Stock",
      "img":"https://5.imimg.com/data5/KC/VE/MY-4302449/kids-blanket-7-500x500.jpeg",
      "color":"yellow"
      
    },
    {
      "pid":"109",
      "pname":"kids bottol",
      "status":"Active",
      "img":"https://rukminim1.flixcart.com/image/832/832/xif0q/bottle/s/9/k/250-unbreakable-sipper-spray-tumbler-with-straw-250ml-fountain-original-imagg9myegssphss.jpeg?q=70",
      "color":"green"
    
      
    }
   ]
  
  ngOnInit(): void {

  }

 

}

  