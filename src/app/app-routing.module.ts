import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckInComponent } from './check-in/check-in.component';
import { Routes } from '@angular/router';


const routes: Routes = [
  { path: 'check-in', component: CheckInComponent }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
