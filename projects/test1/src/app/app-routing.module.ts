import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SomeResolver12 } from './modules/home-module11/classes/some-resolver12';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./modules/home-module11/home11.module').then(m => m.HomeModule11Module),
    resolve: {
      data_in_this_object: SomeResolver12
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
