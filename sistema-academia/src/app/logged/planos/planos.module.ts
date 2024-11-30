import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from '../perfil/perfil.component';
import { RouterModule, Routes } from '@angular/router';
import { PlanosComponent } from './planos.component';

const routes: Routes = [
  { path: '', component: PlanosComponent },
];


@NgModule({
  declarations: [PlanosComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PlanosModule { }
