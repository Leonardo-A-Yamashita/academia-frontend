import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtividadesComponent } from './atividades.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: AtividadesComponent },
];

@NgModule({
  declarations: [AtividadesComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],

})
export class AtividadesModule { }
