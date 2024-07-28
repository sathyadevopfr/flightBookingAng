import { Component,ElementRef,ViewChild } from '@angular/core';
import { HttpService } from '../../service';
import { ResponseBody } from '../../modal';

@Component({
  selector: 'app-mainnav',
  templateUrl: './mainnav.component.html',
  styleUrl: './mainnav.component.css',
})
export class MainnavComponent {
  @ViewChild('registerModal') registerModal: ElementRef | undefined;
  @ViewChild('loginModal') loginModal: ElementRef | undefined;

  registerObj: any = {
    name: '',
    mobileNo: '',
    email: '',
    city: '',
    address: '',
    password: '',
  };

  loggedUserData: any;

  loginObj: any = {
    email: '',
    password: '',
  };

  constructor(private httpService: HttpService) {
    const localData = localStorage.getItem('flightCustomer');
    if (localData != null) {
      this.loggedUserData = JSON.parse(localData);
    }
  }

  openRegister() {
    if (this.registerModal != null) {
      this.registerModal.nativeElement.style.display = 'block';
    }
  }

  closeRegister() {
    if (this.registerModal != null) {
      this.registerModal.nativeElement.style.display = 'none';
    }
  }

  openLogin() {
    if (this.loginModal != null) {
     
      this.loginModal.nativeElement.style.display = 'block';
       
    }
  }

  closeLogin() {
    if (this.loginModal != null) {
      this.loginModal.nativeElement.style.display = 'none';
    }
  }
  onRegister() {
    this.httpService
      .registerUser(this.registerObj)
      .subscribe((result: ResponseBody) => {
        if (result.result) {
          alert('registration is success');
          this.closeRegister();
        } else {
          alert(result.message);
        }
      });
  }
  onLogin() {
    this.httpService
      .logintheUser(this.loginObj)
      .subscribe((result: ResponseBody) => {
        if (result.result) { 
          this.loggedUserData = result.data;
          alert('Login Success');
          localStorage.setItem('flightCustomer', JSON.stringify(result.data));
          this.closeLogin();
        } else {
          alert('Invalid Credintals');
        }
      });
  }

  logout() {
    localStorage.removeItem('flightCustomer');
    this.loggedUserData = undefined;
  }
}
