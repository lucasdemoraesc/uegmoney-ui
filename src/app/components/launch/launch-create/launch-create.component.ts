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

  constructor() { }

  ngOnInit(): void {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)) {
      this.mobile = true;
    }
  };
}
