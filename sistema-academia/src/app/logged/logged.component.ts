import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.scss'],
})
export class LoggedComponent implements OnInit {
  role: string = '';
  menus: Array<{ label: string; path: string }> = [];

  constructor(private storageService: StorageService) {}

  ngOnInit() {
    this.role = this.storageService.getItem('role') || 'cliente';
    if (this.role === 'ALUNO') {
      this.menus = [
        { label: 'Home', path: 'home' },
        { label: 'Meus Planos', path: 'planos' },
        { label: 'Atividades', path: 'atividades' },
        { label: 'Perfil', path: 'perfil' },
      ];
    } else if (this.role === 'PROFESSOR') {
      this.menus = [
        { label: 'Home', path: 'home' },
        { label: 'Gerenciar Clientes', path: 'clientes' },
        { label: 'Gerenciar Atividades', path: 'gerenciar-atividades' },
        { label: 'Atividades', path: 'atividades' },

        { label: 'Perfil', path: 'perfil' },
        { label: 'Gerenciar Avisos', path: 'gerenciar-aviso' },
      ];
    }
  }
}
