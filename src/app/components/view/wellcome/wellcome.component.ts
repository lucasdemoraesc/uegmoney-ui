import { Component, OnInit } from '@angular/core';
import { WellcomeMessage } from '../../../models/wellcome-message.model';
import { WellcomeService } from '../../../services/wellcome.service';

@Component({
  selector: 'app-wellcome',
  templateUrl: './wellcome.component.html',
  styleUrls: ['./wellcome.component.css']
})
export class WellcomeComponent implements OnInit {

    hour: any;
    message: WellcomeMessage;

  constructor(private wellcomeService: WellcomeService) { }

  ngOnInit(): void {
    var tmp = new Date();
    this.hour = tmp.getHours();

    this.wellcomeService.getMessage().subscribe(message => {
      this.message = message
    });
  }
}
