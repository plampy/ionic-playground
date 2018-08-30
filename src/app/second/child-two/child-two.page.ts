import { Component, OnInit } from '@angular/core';
import { SecondDataService } from '../services/second-data.service';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.page.html',
  styleUrls: ['./child-two.page.scss']
})
export class ChildTwoPage implements OnInit {
  constructor(public data: SecondDataService) {}

  ngOnInit() {}
}
