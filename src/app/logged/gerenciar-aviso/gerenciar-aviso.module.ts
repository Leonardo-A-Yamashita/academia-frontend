import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { GerenciarAvisoComponent } from './gerenciar-aviso.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: GerenciarAvisoComponent },
];


@NgModule({
  declarations: [GerenciarAvisoComponent],
  imports: [CommonModule,
    RouterModule.forChild(routes),
   HttpClientModule,
   FormsModule,

 ],
})
export class GerenciarAvisoModule { }
