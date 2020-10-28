import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-launch-create',
  templateUrl: './launch-create.component.html',
  styleUrls: ['./launch-create.component.css']
})
export class LaunchCreateComponent implements OnInit {

  mobile: Boolean;
  tipos = [
    { label: "Receita", value: "RECEIVED" },
    { label: "Despesa", value: "EXPENSE" }
  ];
  categorias = [
    { label: "Alimentação", value: 0 },
    { label: "Transporte", value: 1 },
    { label: "Mercado", value: 2 },
    { label: "Moradia", value: 3 },
    { label: "Salário", value: 4 },
    { label: "Dividendos", value: 5 }
  ]
  pessoas = [
    { label: "Lucas Moraes", value: 0 },
    { label: "Sâmea Natasha", value: 1 },
    { label: "Karine Moraes", value: 2 }
  ]

  constructor() { }

  ngOnInit(): void {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)) {
      this.mobile = true;
    }
  };
}
