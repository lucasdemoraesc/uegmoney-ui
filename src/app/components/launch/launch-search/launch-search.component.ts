import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-launch-search',
  templateUrl: './launch-search.component.html',
  styleUrls: ['./launch-search.component.css']
})
export class LaunchSearchComponent implements OnInit {

  mobile: Boolean;

  constructor() { }

  ngOnInit(): void {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)) {
      this.mobile = true;
    }
  };
}