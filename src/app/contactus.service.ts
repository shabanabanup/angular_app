import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//access contact.ts
import { Contactus} from './contactus';
@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  constructor() { }
  contactus:Contactus[]=[
    {
      empid:131,
      ename:'Sara',
      emailid:'sara@gmail.com',
      ephone:123451,
      img:'https://cdn.iconscout.com/icon/premium/png-256-thumb/contact-us-485563.png'
    },
    {
      empid:132,
      ename:'Jhon',
      emailid:'jhon@gmail.com',
      ephone:123452,
      img:'https://cdn.iconscout.com/icon/premium/png-256-thumb/contact-us-485563.png'
    },
    {
      empid:133,
      ename:'Ritu',
      emailid:'ritu@gmail.com',
      ephone:123453,
      img:'https://cdn.iconscout.com/icon/premium/png-256-thumb/contact-us-485563.png'
    },
    {
      empid:134,
      ename:'Suraj',
      emailid:'suraj@gmail.com',
      ephone:123454,
      img:'https://cdn.iconscout.com/icon/premium/png-256-thumb/contact-us-485563.png'
    },
    {
      empid:135,
      ename:'Suhana',
      emailid:'suhana@gmail.com',
      ephone:123455,
      img:'https://cdn.iconscout.com/icon/premium/png-256-thumb/contact-us-485563.png'
    }
  ];
  public getContactUs(): any {
    const contactus = new Observable(observe => {
      setTimeout(() => {
        observe.next(this.contactus);
      }, 1000);
    });
    return contactus;
  }
}