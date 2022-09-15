import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElephantComponent } from './components/elephant/elephant.component';
import { AnimalsHomeComponent } from './components/animals-home/animals-home.component';
import { TigerComponent } from './components/tiger/tiger.component';
import { BearComponent } from './components/bear/bear.component';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

const animalRoutes: Routes = [
  {
    path: '',
    component: AnimalsHomeComponent
  }
]

@NgModule({
  declarations: [
    ElephantComponent,
    AnimalsHomeComponent,
    TigerComponent,
    BearComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(animalRoutes),
    FlexLayoutModule
  ]
})
export class Animals12Module { }
