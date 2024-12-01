import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GerenciarAtividadeComponent } from './gerenciar-atividade.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  { path: '', component: GerenciarAtividadeComponent },
];

@NgModule({
  declarations: [GerenciarAtividadeComponent],
  imports: [CommonModule, 
    RouterModule.forChild(routes),
    FormsModule,
    HttpClientModule,
  ],
})
export class GerenciarAtividadeModule { }
