import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Chapter1p1Page } from './chapter1p1.page';

const routes: Routes = [
  {
    path: '',
    component: Chapter1p1Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Chapter1p1Page]
})
export class Chapter1p1PageModule {}
