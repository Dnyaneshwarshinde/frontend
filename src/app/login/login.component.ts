import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message;
  constructor(public service:AuthService, public router : Router) { }

  ngOnInit() {
  }
  Login(credentials)
  {
     let isLoggedIn= this.service.Login(credentials) ;
     if(isLoggedIn)
     {
        this.message = ""  
        this.router.navigate(['home']);
     }
     else{
      this.message = "UName / Password is Wrong!"  ;
     }


  }
}







