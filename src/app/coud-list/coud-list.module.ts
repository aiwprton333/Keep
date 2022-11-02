import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoudListPageRoutingModule } from './coud-list-routing.module';

import { CoudListPage } from './coud-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoudListPageRoutingModule
  ],
  declarations: [CoudListPage]
})
export class CoudListPageModule {}
