import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.css'],
  providers: [MessageService,ConfirmationService]
})
export class LaunchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
