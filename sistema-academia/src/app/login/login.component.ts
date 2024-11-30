import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private router: Router) {}

  login(userType: string) {
    // Salva o tipo de usuário no localStorage
    localStorage.setItem('userType', userType);

    // Redireciona para a área logada
    this.router.navigate(['/logged']);
  }
}
