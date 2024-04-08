import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdcatPage } from './prodcat.page';

const routes: Routes = [
  {
    path: '',
    component: ProdcatPage
  },
  {
    path: ':id',
    component: ProdcatPage
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdcatPageRoutingModule {}
