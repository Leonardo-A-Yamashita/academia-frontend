import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrarComponent } from './registrar.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: RegistrarComponent },
];

@NgModule({
  declarations: [RegistrarComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],

})
export class RegistrarModule { }
