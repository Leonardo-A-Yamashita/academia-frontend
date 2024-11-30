import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PerfilComponent } from './perfil.component';

const routes: Routes = [
  { path: '', component: PerfilComponent },
];

@NgModule({
  declarations: [PerfilComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
})
export class PerfilModule {}
