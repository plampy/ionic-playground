import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChildOnePage } from './child-one/child-one.page';
import { ChildTwoPage } from './child-two/child-two.page';
import { ChildThreePage } from './child-three/child-three.page';
import { SecondPage } from './second.page';

import { SecondDataService } from './services/second-data.service';

// With this setup the animations have a but in iOS
// const routes: Routes = [
//   {
//     path: '',
//     component: SecondPage,
//     children: [
//       {
//         path: '',
//         component: ChildOnePage
//       },
//       {
//         path: 'child-two',
//         component: ChildTwoPage
//       },
//       {
//         path: 'child-three',
//         component: ChildThreePage
//       }
//     ]
//   }
// ];

// With this setup, the animations work and the lifetime of the SecondDataService
// is the same as above. With this you can also get rid of the SecondPage stuff
// just keeping the module.
const routes: Routes = [
  {
    path: '',
    component: ChildOnePage
  },
  {
    path: 'child-two',
    component: ChildTwoPage
  },
  {
    path: 'child-three',
    component: ChildThreePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChildOnePage, ChildTwoPage, ChildThreePage, SecondPage],
  providers: [SecondDataService]
})
export class SecondPageModule {}
