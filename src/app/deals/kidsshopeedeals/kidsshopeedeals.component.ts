import { Component, OnInit } from '@angular/core';
import * as alldeals from "../deals.json";
@Component({
  selector: 'app-kidsshopeedeals',
  templateUrl: './kidsshopeedeals.component.html',
  styleUrls: ['./kidsshopeedeals.component.css']
})
export class KidsshopeedealsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  all:any=(alldeals as any).default;
}
