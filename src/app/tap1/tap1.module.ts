import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tap1PageRoutingModule } from './tap1-routing.module';

import { Tap1Page } from './tap1.page';

import { ComponentsModule } from './../components/components.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    Tap1PageRoutingModule
  ],
  declarations: [Tap1Page]
})
export class Tap1PageModule {}
