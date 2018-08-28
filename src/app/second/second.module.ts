import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SecondPage } from './second.page';
import { ChildOnePage } from '../child-one/child-one.page';

const routes: Routes = [
	{
		path: '',
		component: SecondPage,
		children: [
			{
				path: '',
				component: ChildOnePage
			}
		]
	}
];

@NgModule({
	imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
	declarations: [SecondPage, ChildOnePage]
})
export class SecondPageModule {}
