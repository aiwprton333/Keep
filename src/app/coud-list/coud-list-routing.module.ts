import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoudListPage } from './coud-list.page';

const routes: Routes = [
  {
    path: '',
    component: CoudListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoudListPageRoutingModule {}
