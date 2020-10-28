import { Component, OnInit } from '@angular/core';
import { ShowSidebarService } from 'src/app/components/templates/sidebar/event/show-sidebar.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  title = "Controle de Gastos";

  constructor(private showSidebarService: ShowSidebarService) { }

  ngOnInit(): void {
  }

  callSideBar() {
    this.showSidebarService.sendShowSidebar();
  }

}
