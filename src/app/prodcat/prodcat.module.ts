import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdcatPageRoutingModule } from './prodcat-routing.module';

import { ProdcatPage } from './prodcat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdcatPageRoutingModule
  ],
  declarations: [ProdcatPage]
})
export class ProdcatPageModule {}
