import { Component, inject, OnInit } from '@angular/core';


import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";

import { RouterOutlet } from '@angular/router';
import { AuthService, User } from './auth.service';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor() {
    // Initialization logic can go here
  }
  auth = inject(AuthService);
   ngOnInit(): void {

    this.auth.refreshToken().subscribe(
      {
        next: (data) => {
          const token = data.accessToken;
          const decodedToken = jwtDecode<{user:Omit<User,'token'>}>(token);


         // if (decodedToken && 'user' in decodedToken && decodedToken?.user ){
            const user:User = { ...decodedToken.user, token: token }
            console.log(user);
             this.auth.userSignal.set(user);


        //  }
          //else
        //  this.auth.userSignal.set(null);

}
        ,
        error: (refreshError) => {
          console.log("refresh error from app component",refreshError)
          this.auth.userSignal.set(null);
        }
      }
    );



      // Initialization logic can go here
      // (localStorage.getItem('token')&&localStorage.getItem('user'))?
      //   this.auth.userSignal.set(<User>(JSON.parse(localStorage.getItem('user')!))) : this.auth.userSignal.set(null);


    }



}
