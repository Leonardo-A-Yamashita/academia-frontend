import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css'],
})
export class RegistrarComponent {
  registro = {
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
  };
  mensagemErro: string | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  registrar() {
    if (this.registro.senha !== this.registro.confirmarSenha) {
      this.mensagemErro = 'As senhas não coincidem.';
      return;
    }
  
    this.http.post('https://high-end-academia-back-bfa075238b2e.herokuapp.com/api/registrar', this.registro).subscribe({
      next: () => {
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.error('Erro ao registrar:', error);
        this.mensagemErro = 'Erro ao registrar. Tente novamente.';
      },
    });
  }
}
