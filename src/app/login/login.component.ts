import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
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
    this.http.post('https://high-end-academia-back-bfa075238b2e.herokuapp.com/api/login', this.credentials).subscribe({
      next: (response: any) => {
        const { role } = response;

        this.storageService.setItem('role', role);

        this.router.navigate(['/logged']);
      },
      error: () => {
        this.errorMessage = 'Credenciais inválidas. Tente novamente.';
      },
    });
  }
}
