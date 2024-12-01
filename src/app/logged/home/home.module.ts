import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: HomeComponent },
];


@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule,
     RouterModule.forChild(routes),
     FormsModule,
     HttpClientModule,
    ],

})
export class HomeModule { }
