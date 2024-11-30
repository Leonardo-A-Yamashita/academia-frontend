import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoggedComponent } from './logged.component';

const routes: Routes = [
  {
    path: '',
    component: LoggedComponent,
    children: [
      { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
      { path: 'perfil', loadChildren: () => import('./perfil/perfil.module').then(m => m.PerfilModule) },
      { path: 'atividades', loadChildren: () => import('./atividades/atividades.module').then(m => m.AtividadesModule) },
      { path: 'planos', loadChildren: () => import('./planos/planos.module').then(m => m.PlanosModule) },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  declarations: [LoggedComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class LoggedModule {}
