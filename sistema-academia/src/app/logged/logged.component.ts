import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.scss'],
})
export class LoggedComponent implements OnInit {
  userType: string = ''; // 'cliente', 'funcionario', 'admin'
  menus: Array<{ label: string; path: string }> = [];

  ngOnInit() {
    // Simulação de tipo de usuário (pode ser substituído por uma API)
    this.userType = localStorage.getItem('userType') || 'cliente';

    if (this.userType === 'cliente') {
      this.menus = [
        { label: 'Home', path: 'home' },
        { label: 'Meus Planos', path: 'planos' },
        { label: 'Atividades', path: 'atividades' },
        { label: 'Perfil', path: 'perfil' },
      ];
    } else if (this.userType === 'funcionario') {
      this.menus = [
        { label: 'Home', path: 'home' },
        { label: 'Gerenciar Clientes', path: 'clientes' },
        { label: 'Atividades', path: 'atividades' },
        { label: 'Perfil', path: 'perfil' },
      ];
    } else if (this.userType === 'admin') {
      this.menus = [
        { label: 'Home', path: 'home' },
        { label: 'Relatórios', path: 'relatorios' },
        { label: 'Quadro de Avisos', path: 'avisos' },
        { label: 'Perfil', path: 'perfil' },
      ];
    }
  }
}
