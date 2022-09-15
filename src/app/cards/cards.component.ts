import { Component, OnInit } from '@angular/core';
import * as productdetails from '../data/product.json';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  
  //Fetch the data from products.json using the alias productdetails in line nnumber 4
  product:any = (productdetails as any).default;

  constructor() { }

  ngOnInit(): void {
  }
 

}

  