import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
router: any;
constructor(router: Router){
}
navigate(){
  this.router.navigate('/check-in')
}
}
