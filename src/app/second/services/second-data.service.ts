import { Injectable, OnDestroy } from '@angular/core';

@Injectable()
export class SecondDataService implements OnDestroy {
  constructor() {
    console.log('constructed SecondDataService');
  }

  ngOnDestroy() {
    console.log('onDestroy SecondDataService');
  }
}
