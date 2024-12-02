import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gerenciar-professores',
  templateUrl: './gerenciar-professores.component.html',
  styleUrl: './gerenciar-professores.component.css'
})
export class GerenciarProfessoresComponent implements OnInit {
  novoProfessor = {
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
  };
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  }

  adicionarProfessor() {
    this.http
      .post('https://high-end-academia-back-bfa075238b2e.herokuapp.com/api/registrar/professor', this.novoProfessor, { responseType: 'text' })
      .subscribe({
        next: (response: string) => {
          if (response.includes('Professor registrado com sucesso')) {
            this.novoProfessor = { nome: '', email: '', senha: '', confirmarSenha: '' };
            alert('Professor registrado com sucesso!');
          } else {
            alert(response);
          }
        },
        error: (error) => {
          alert('Já existe uma conta registrada com este e-mail.');
        },
      });
  }
}