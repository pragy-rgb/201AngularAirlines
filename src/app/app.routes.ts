import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NabBarComponent } from './home/nab-bar/nab-bar.component';

export const routes: Routes = [
    {path:"Home", title:"Home", component: HomeComponent},
    {path:"Home/nav", title:"Home", component: NabBarComponent}
    ];
