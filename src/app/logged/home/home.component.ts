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
    this.http.get('http://localhost:8080/api/avisos').subscribe((data: any) => {
      this.avisos = data;
    });
  }
}