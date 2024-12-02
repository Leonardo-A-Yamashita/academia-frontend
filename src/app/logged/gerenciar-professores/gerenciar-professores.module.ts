import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GerenciarProfessoresComponent } from './gerenciar-professores.component';

const routes: Routes = [
  { path: '', component: GerenciarProfessoresComponent },
];

@NgModule({
  declarations: [GerenciarProfessoresComponent],
  imports: [CommonModule, 
    RouterModule.forChild(routes),
    FormsModule,
    HttpClientModule,
  ],
})
export class GerenciarProfessoresModule { }
