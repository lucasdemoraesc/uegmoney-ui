import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.css']
})
export class LaunchListComponent implements OnInit {

  lancamentos = [
    {
      tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: new Date('2020/10/12'),
      dataPagamento: new Date('2020/10/10'), valor: 4.55, pessoa: 'Padaria do José'
    },
    {
      tipo: 'RECEITA', descricao: 'Venda de software', dataVencimento: new Date('2020/10/9'),
      dataPagamento: null, valor: 80000, pessoa: 'Atacado Brasil'
    },
    {
      tipo: 'DESPESA', descricao: 'Impostos', dataVencimento: new Date('2020/9/8'),
      dataPagamento: null, valor: 14312, pessoa: 'Ministério da Fazenda'
    },
    {
      tipo: 'DESPESA', descricao: 'Mensalidade de escola', dataVencimento: new Date('2020/10/13'),
      dataPagamento: new Date('2020/10/13'), valor: 800, pessoa: 'Escola Abelha Rainha'
    },
    {
      tipo: 'RECEITA', descricao: 'Venda de carro', dataVencimento: new Date('2020/9/28'),
      dataPagamento: null, valor: 55000, pessoa: 'Sebastião Souza'
    },
    {
      tipo: 'DESPESA', descricao: 'Aluguel', dataVencimento: new Date('2020/9/30'),
      dataPagamento: new Date('2020/10/2'), valor: 1750, pessoa: 'Casa Nova Imóveis'
    },
    {
      tipo: 'DESPESA', descricao: 'Mensalidade musculação', dataVencimento: new Date('2020/10/20'),
      dataPagamento: null, valor: 180, pessoa: 'Academia Top'
    }
  ];

  cols: any[];

  constructor() { }

  ngOnInit(): void {

    this.cols = [
      { field: 'descricao', header: 'Descrição' },
      { field: 'pessoa', header: 'Pessoa' },
      { field: 'valor', header: 'Valor R$' },
      { field: 'tipo', header: 'Tipo' },
      { field: 'dataVencimento', header: 'Vencimento' },
      { field: 'dataPagamento', header: 'Pago' },
    ]
  }
}
