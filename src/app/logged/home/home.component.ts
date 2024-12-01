import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  avisos: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.carregarAvisos();
  }

  carregarAvisos() {
    this.http.get('https://high-end-academia-back-bfa075238b2e.herokuapp.com/api/avisos').subscribe((data: any) => {
      this.avisos = data;
    });
  }
}