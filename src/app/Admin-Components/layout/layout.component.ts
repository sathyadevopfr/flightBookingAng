import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  loggedUserName: any;

  constructor(private router :Router) {
    const localData = localStorage.getItem('FlightUser');
    if (localData != null) {
      this.loggedUserName = JSON.parse(localData);
    }
  }
  logOff() {
    localStorage.removeItem('FlightUser');
    this.router.navigateByUrl('/login')
  }
}
