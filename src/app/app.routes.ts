import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProyectPageComponent } from './pages/proyect-page/proyect-page.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'all-projects',
        component: ProyectPageComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    }

];

