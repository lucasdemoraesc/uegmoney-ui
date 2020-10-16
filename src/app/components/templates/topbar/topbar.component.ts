import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from 'src/app/components/templates/sidebar/event/event-emitter.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  title = "Controle de Gastos";

  constructor(private eventEmitterService: EventEmitterService) { }

  ngOnInit(): void {
  }

  callSideBar() {
    this.eventEmitterService.sendShowSidebar();
  }

}
