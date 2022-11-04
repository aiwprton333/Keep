import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tap1Page } from './tap1.page';

const routes: Routes = [
  {
    path: '',
    component: Tap1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tap1PageRoutingModule {}
