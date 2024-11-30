import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-atividades',
  templateUrl: './atividades.component.html',
  styleUrls: ['./atividades.component.css'],
})
export class AtividadesComponent implements OnInit {

  atividades: any[] = [];
  atividade = {
    titulo: '',
    descricao: '',
    dataEntrega: '',
    professor: ''
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.listarAtividades();
  }
  
  listarAtividades() {
    this.http.get('http://localhost:8080/api/atividades').subscribe((data: any) => {
      this.atividades = data;
    });
  }

}
