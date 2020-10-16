import { Component, OnInit } from '@angular/core';
import { WellcomeMessage } from './model/wellcome-message.model';
import { WellcomeService } from './service/wellcome.service';

@Component({
  selector: 'app-wellcome',
  templateUrl: './wellcome.component.html',
  styleUrls: ['./wellcome.component.css']
})
export class WellcomeComponent implements OnInit {

  hour: any;
  image: string;
  message: WellcomeMessage;

  constructor(private wellcomeService: WellcomeService) { }

  ngOnInit(): void {
    var tmp = new Date();
    this.hour = tmp.getHours();

    this.changeImage();

    this.wellcomeService.getMessage().subscribe(message => {
      this.message = message
    });
  }

  private changeImage() {
    if (this.hour >= 6 && this.hour < 12)
      this.image = "assets/img/morning.svg";

    else if (this.hour >= 12 && this.hour < 18)
      this.image = "assets/img/evening.svg";

    else
      this.image = "assets/img/night.svg";
  }
}
