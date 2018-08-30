import { Component, OnInit } from '@angular/core';
import { SecondDataService } from '../services/second-data.service';

@Component({
  selector: 'app-child-three',
  templateUrl: './child-three.page.html',
  styleUrls: ['./child-three.page.scss']
})
export class ChildThreePage implements OnInit {
  constructor(public data: SecondDataService) {}

  ngOnInit() {}
}
