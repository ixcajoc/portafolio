import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProyectPageComponent } from './pages/proyect-page/proyect-page.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'all-projects',
        component: ProyectPageComponent
    },
    {
        path: '**',
        component: HomeComponent
    },
    //   { path: 'oldPath', redirectTo: '/staticPath' },  

];

  