import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gerenciar-aviso',
  templateUrl: './gerenciar-aviso.component.html',
  styleUrl: './gerenciar-aviso.component.css'
})
export class GerenciarAvisoComponent {

  aviso = {
    titulo: '',
    descricao: ''
  };

  constructor(private http: HttpClient) {}

  salvarAviso() {
    if (this.aviso.titulo && this.aviso.descricao) {
      this.http.post('https://high-end-academia-back-bfa075238b2e.herokuapp.com/api/avisos', this.aviso).subscribe(() => {
        alert('Aviso criado com sucesso!');
        this.aviso = { titulo: '', descricao: '' };
      });
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  }
}