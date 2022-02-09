import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SomeResolver13 } from '../classes/some-resolver13';
import { Home11Component } from '../components/home11/home11.component';
import { Home12Component } from '../components/home12/home12.component';

const routes: Routes = [
  {
    path: '',
    component: Home11Component,
    resolve: {
      data_ikkada: SomeResolver13
    }
  },
  {
    path: 'home11',
    component: Home11Component
  },
  {
    path: 'home12',
    component: Home12Component
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeModule11RoutingModule { }
