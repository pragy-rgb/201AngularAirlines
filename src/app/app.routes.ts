import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';

export const routes: Routes = [
   
    {path:"Home", title:"Home", component: HeaderComponent},

    {path:"Home/login", title:"Home", component: LoginComponent},
 
    ];
   