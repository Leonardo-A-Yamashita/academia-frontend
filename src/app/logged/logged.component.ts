import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.css'],
})
export class LoggedComponent implements OnInit {
  role: string = '';
  menus: Array<{ label: string; path: string }> = [];

  constructor(private storageService: StorageService, private router: Router) {}

  ngOnInit() {
    this.role = this.storageService.getItem('role') || 'cliente';
    if (this.role === 'ALUNO') {
      this.menus = [
        { label: 'Home', path: 'home' },
        { label: 'Meus Planos', path: 'planos' },
        { label: 'Atividades', path: 'atividades' },
      ];
    } else if (this.role === 'PROFESSOR') {
      this.menus = [
        { label: 'Home', path: 'home' },
        { label: 'Atividades', path: 'atividades' },
        { label: 'Gerenciar Atividades', path: 'gerenciar-atividades' },
        { label: 'Gerenciar Avisos', path: 'gerenciar-aviso' },
        {label: 'Gerenciar Professores', path: 'gerenciar-professor'},
      ];
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
