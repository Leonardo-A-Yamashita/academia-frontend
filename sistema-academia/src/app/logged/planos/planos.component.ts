import { Component } from '@angular/core';

@Component({
  selector: 'app-planos',
  templateUrl: './planos.component.html',
  styleUrls: ['./planos.component.scss'],
})
export class PlanosComponent {
  planos = [
    {
      titulo: 'Plano Mensal',
      descricao: 'Acesso ilimitado à academia por 30 dias.',
      vencimento: new Date('2024-12-01'),
      status: 'Ativo',
    },
  ];
}
