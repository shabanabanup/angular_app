import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  _productname:any | undefined;
  @Input('product') //Laptop
  //write
  set pname(pname:any) //Laptop
  {
    this._productname=pname || 'not found';
    console.log(pname)
  }
  //read
  get pname():string
  {
    return this._productname;
  }
}
