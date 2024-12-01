import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Plano {
  id: number;
  titulo: string;
  descricao: string;
  preco: number;
  vencimento: string;
}

@Component({
  selector: 'app-planos',
  templateUrl: './planos.component.html',
  styleUrls: ['./planos.component.css'],
})
export class PlanosComponent implements OnInit {
  planoAtivo: Plano | null = null;
  planosDisponiveis: Plano[] = [];
  mensagem: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.carregarPlanoAtivo();
    this.carregarPlanosDisponiveis();
  }

  carregarPlanoAtivo() {
    this.http.get<Plano>('https://high-end-academia-back-bfa075238b2e.herokuapp.com/api/planos/ativo').subscribe({
      next: (plano) => (this.planoAtivo = plano),
      error: () => (this.planoAtivo = null),
    });
  }

  carregarPlanosDisponiveis() {
    this.http.get<Plano[]>('https://high-end-academia-back-bfa075238b2e.herokuapp.com/api/planos/disponiveis').subscribe({
      next: (planos) => (this.planosDisponiveis = planos),
      error: (error) => console.error('Error fetching planos', error),
    });
  }

  comprarPlano(plano: any) {
    this.http.post('https://high-end-academia-back-bfa075238b2e.herokuapp.com/api/planos/comprar', plano.id).subscribe({
      next: (res: any) => {
        this.mensagem = res.message; 
        this.planoAtivo = res.plano; 
      },
      error: () => {
        this.mensagem = 'Erro ao comprar o plano. Tente novamente.';
      },
    });
  }
}
