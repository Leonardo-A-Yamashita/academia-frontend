import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent {
  perfil = {
    nome: 'João Silva',
    email: 'joao.silva@exemplo.com',
    telefone: '(11) 99999-9999',
    dataNascimento: '1990-01-01',
  };

  salvar() {
    alert('Perfil atualizado com sucesso!');
  }
}
