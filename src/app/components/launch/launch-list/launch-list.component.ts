import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.css']
})
export class LaunchListComponent implements OnInit {

  @Input() lancamentos = [];

  constructor() { }

  ngOnInit(): void { }
}
