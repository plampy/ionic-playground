import { Component, OnInit } from '@angular/core';
import { SecondDataService } from '../services/second-data.service';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.page.html',
  styleUrls: ['./child-one.page.scss']
})
export class ChildOnePage implements OnInit {
  constructor(public data: SecondDataService) {}

  ngOnInit() {}
}
