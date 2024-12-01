import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrarComponent } from './registrar.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  { path: '', component: RegistrarComponent },
];

@NgModule({
  declarations: [RegistrarComponent],
  imports: [CommonModule, 
    RouterModule.forChild(routes),
    FormsModule,
    HttpClientModule,

  ],

})
export class RegistrarModule { }
