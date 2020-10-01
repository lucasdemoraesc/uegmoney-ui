import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventEmitterService } from 'src/app/services/event-emitter.service';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

	visibility: boolean;
	calledEventSubscription: Subscription;

	constructor(private eventEmitterService: EventEmitterService) {

		this.calledEventSubscription = this.eventEmitterService.getClickEvent()
										.subscribe(() => this.show());
	}

	ngOnInit(): void {
	}

	show() {
		this.visibility = true;
	}

}
