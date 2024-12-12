import { Component } from '@angular/core';
import { LoginComponent } from "../login/login.component";
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LoginComponent, RouterOutlet, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  islogin = false;
  
  constructor(private router:Router){
  
  }
 login() {
    this.router.navigate(['Home/login']);
    console.log("Clicked")
  }
}

 