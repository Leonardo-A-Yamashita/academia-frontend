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
    professor: '',
    vagas: 0,

  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.listarAtividades();
  }
  
  listarAtividades() {
    this.http.get('https://high-end-academia-back-bfa075238b2e.herokuapp.com/api/atividades').subscribe((data: any) => {
      this.atividades = data;
    });
  }

  cadastrarEmAtividade(id: number) {
    this.http.post(`https://high-end-academia-back-bfa075238b2e.herokuapp.com/api/atividades/${id}/cadastrar`, {}).subscribe({
      next: () => {
        alert('Cadastro realizado com sucesso!');
        this.listarAtividades(); 
      },
      error: (error) => {
        alert(error.error || 'Erro ao realizar cadastro.');
      },
    });
  }

}
