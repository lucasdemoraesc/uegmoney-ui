import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventEmitterService } from 'src/app/components/templates/sidebar/event/event-emitter.service';
import { MenuItem } from 'primeng/api';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

	visibility: boolean;
	items: MenuItem[];
	calledEventSubscription: Subscription;

	constructor(private eventEmitterService: EventEmitterService) {
		this.calledEventSubscription = this.eventEmitterService.getShowSidebarEvent()
			.subscribe(() => this.show());
	}

	ngOnInit(): void {
		this.items = [
            {label: 'Lançamentos', icon: 'fas fa-cash-register', routerLink: '/launch'},
            {label: 'Dashboard', icon: 'fas fa-chart-pie', routerLink: '/dashboard'},
            {label: 'Cadastros', icon: 'fas fa-table', routerLink: '/person'}
        ];
	}

	show() {
		this.visibility = true;
	}
}
