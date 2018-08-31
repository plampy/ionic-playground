import { Component, OnInit } from '@angular/core';
import { SecondDataService } from './services/second-data.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.page.html',
  styleUrls: ['./second.page.scss'],
  providers: [SecondDataService]
})
export class SecondPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
