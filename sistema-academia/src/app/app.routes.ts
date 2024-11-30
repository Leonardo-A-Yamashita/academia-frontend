import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
    { path: 'registrar', loadChildren: () => import('./registrar/registrar.module').then(m => m.RegistrarModule) },
    { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
];
