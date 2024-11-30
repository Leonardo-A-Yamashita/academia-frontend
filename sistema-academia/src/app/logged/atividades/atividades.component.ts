import { Component } from '@angular/core';

@Component({
  selector: 'app-atividades',
  templateUrl: './atividades.component.html',
  styleUrls: ['./atividades.component.css'],
})
export class AtividadesComponent {
  atividades = [
    {
      titulo: 'Treino de força',
      descricao: 'Treino focado em musculação.',
      data: new Date('2024-11-28'),
    },
    {
      titulo: 'Aula de yoga',
      descricao: 'Sessão de yoga para relaxamento.',
      data: new Date('2024-11-29'),
    },
  ];
}
