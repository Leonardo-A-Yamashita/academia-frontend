import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gerenciar-atividade',
  templateUrl: './gerenciar-atividade.component.html',
  styleUrls: ['./gerenciar-atividade.component.css'],
})
export class GerenciarAtividadeComponent implements OnInit {
  atividades: any[] = [];
  atividade = {
    id: null,
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

  salvarAtividade() {
    if (
      !this.atividade.titulo ||
      !this.atividade.descricao ||
      !this.atividade.dataEntrega ||
      this.atividade.vagas <= 0
    ) {
      alert('Por favor, preencha todos os campos obrigatórios corretamente!');
      return;
    }

    const url = this.atividade.id
      ? `https://high-end-academia-back-bfa075238b2e.herokuapp.com/api/atividades/${this.atividade.id}`
      : 'https://high-end-academia-back-bfa075238b2e.herokuapp.com/api/atividades';

    this.http.post(url, this.atividade).subscribe(() => {
      alert(this.atividade.id ? 'Atividade atualizada com sucesso!' : 'Atividade salva com sucesso!');
      this.listarAtividades();
      this.resetarFormulario();
    });
  }

  editarAtividade(atividade: any) {
    this.atividade = { ...atividade };
  }

  excluirAtividade(id: number) {
    if (confirm('Tem certeza que deseja excluir esta atividade?')) {
      this.http.delete(`https://high-end-academia-back-bfa075238b2e.herokuapp.com/api/atividades/${id}`).subscribe(() => {
        alert('Atividade excluída com sucesso!');
        this.listarAtividades();
      });
    }
  }

  resetarFormulario() {
    this.atividade = { id: null, titulo: '', descricao: '', dataEntrega: '', professor: '', vagas: 0 };
  }
}
