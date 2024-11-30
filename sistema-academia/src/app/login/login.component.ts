import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  credentials = {
    email: '',
    password: '',
  };
  errorMessage: string | null = null;

  constructor(
    private http: HttpClient,
    private router: Router,
    private storageService: StorageService
  ) {}

  login() {
    this.http.post('http://localhost:8080/api/login', this.credentials).subscribe({
      next: (response: any) => {
        const { role } = response;

        // Salvar o tipo de usuário no localStorage via serviço
        this.storageService.setItem('role', role);

        this.router.navigate(['/logged']);
      },
      error: () => {
        this.errorMessage = 'Credenciais inválidas. Tente novamente.';
      },
    });
  }
}
