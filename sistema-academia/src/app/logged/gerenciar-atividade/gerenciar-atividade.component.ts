import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gerenciar-atividade',
  templateUrl: './gerenciar-atividade.component.html',
  styleUrl: './gerenciar-atividade.component.css'
})
export class GerenciarAtividadeComponent implements OnInit {
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

  salvarAtividade() {
    this.http.post('http://localhost:8080/api/atividades', this.atividade).subscribe(() => {
      alert('Atividade salva com sucesso!');
      this.listarAtividades();
      this.atividade = { titulo: '', descricao: '', dataEntrega: '', professor: '' };
    });
  }

  editarAtividade(atividade: any) {
    this.atividade = { ...atividade };
  }

  excluirAtividade(id: number) {
    this.http.delete(`http://localhost:8080/api/atividades/${id}`).subscribe(() => {
      alert('Atividade excluída com sucesso!');
      this.listarAtividades();
    });
  }
}