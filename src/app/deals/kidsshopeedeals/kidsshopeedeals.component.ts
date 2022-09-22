import { Component, OnInit } from '@angular/core';
import * as alldeals from "../deals.json";
//Auth Guard
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-kidsshopeedeals',
  templateUrl: './kidsshopeedeals.component.html',
  styleUrls: ['./kidsshopeedeals.component.css']
})
export class KidsshopeedealsComponent implements OnInit {


  constructor(private auth: AuthService, private route: Router) { }

  logOut() {
    this.auth.logout();
    this.route.navigate(['']);
}

  ngOnInit(): void {
  }
  all:any=(alldeals as any).default;
}