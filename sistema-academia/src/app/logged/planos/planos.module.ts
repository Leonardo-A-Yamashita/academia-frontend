import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PlanosComponent } from './planos.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: PlanosComponent },
];


@NgModule({
  declarations: [PlanosComponent],
  imports: [CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    HttpClientModule,
   ],
  })
export class PlanosModule { }
