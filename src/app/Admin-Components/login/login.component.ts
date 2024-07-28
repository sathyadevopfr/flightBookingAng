import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginObj: any = {
    email: '',
    password: '',
  };

  constructor(private httpService:HttpService, private router: Router) {}

  onLogin() {
       this.httpService.onLogin(this.loginObj)
      .subscribe((res: any) => {
        if (res.result) {
          localStorage.setItem('FlightUser', JSON.stringify(res.data));
          this.router.navigateByUrl('/city');
        } else {
          alert(res.message);
        }
      });
  }
}
