import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Empty12Component } from './empty12.component';

import { SomeResolver12 } from './modules/home-module11/classes/some-resolver12';

const routes: Routes = [
  {
    path: '',
    component: Empty12Component
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home-module11/home11.module').then(m => m.HomeModule11Module),
    resolve: {
      data_in_this_object: SomeResolver12
    }
  },
  {
    path: 'animals',
    loadChildren: () => import('./modules/animals12/animals12.module').then(m=>m.Animals12Module)
    // loadChildren: () => import('./modules/animals12/animals12.module')
      // not using .then(m=>m.Animals12Module) gives this error
      // Error: ASSERTION ERROR: NgModule '[object Module]' is not a subtype of 'NgModuleType'. [Expected=> null != null <=Actual]
  },
  {
    path: 'football',
    loadChildren: () => import('./modules/football/football.module').then(m=>m.FootballModule)
    // loadChildren: () => import('./modules/animals12/animals12.module')
      // not using .then(m=>m.Animals12Module) gives this error
      // Error: ASSERTION ERROR: NgModule '[object Module]' is not a subtype of 'NgModuleType'. [Expected=> null != null <=Actual]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
