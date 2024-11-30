import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtividadesComponent } from './atividades.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  { path: '', component: AtividadesComponent },
];

@NgModule({
  declarations: [AtividadesComponent],
  imports: [CommonModule,
     RouterModule.forChild(routes),
    HttpClientModule
  ],
})
export class AtividadesModule { }
