import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NabBarComponent } from './home/nab-bar/nab-bar.component';
import { BlankComponent } from './blank/blank.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';


export const routes: Routes = [
   
    {path:"Home", title:"Home", component: HeaderComponent},

    {path:"Home/login", title:"Home", component: LoginComponent},
 
    ];
    @NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule],
      })
      export class AppRoutingModule {}