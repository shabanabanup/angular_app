import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { CartService } from '../cart.service';
 

@Component({

  selector: 'app-nav',

  templateUrl: './nav.component.html',

  styleUrls: ['./nav.component.css']

})

export class navComponent implements OnInit {

 

  constructor(private authService:UserService,private cartSvc:CartService) { }
  auth:boolean=false;
  admin:boolean=false;

  cartcount: number=0;
  title = 'shiny';
  
  public logo="data:image/png;base64,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";
  onsearch(){
    alert('welcom ');
  }
  name="JOHN"
  productentered: string=' '  

//Event
search_product(product_name:string):void{ //Laptop
  if(!product_name)
  {
    this.productentered=' ';
  }
  this.productentered=product_name; //Laptop
  console.log(product_name)
}
  
  
  ngOnInit(): void {
    this.authService.authSubject.subscribe(
      data => 
      {
        console.log('auth inside nav component: ' + data);
        this.auth = data;
      }
    );
    this.authService.authad.subscribe(
      data => 
      {
        console.log('auth inside nav component: ' + data);
        this.admin = data;
        console.log(this.admin);
        
      }
    );
    this.cartSvc.getCartItems().subscribe (     
      (response) =>
       {        
        this.cartcount=response.length;
        console.log(this.cartcount);
       }
     ) 
    this.cartSvc.countSubject.subscribe (     
      (response) =>
       {        
        this.cartcount=response;
        console.log(this.cartcount);
       }
     ) 

  }


 

}
