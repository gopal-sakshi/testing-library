import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CricHomeComponent } from './components/cric-home/cric-home.component';
import { SquadsComponent } from './components/squads/squads.component';
import { RouterModule, Routes } from '@angular/router';
import { CricEnvironment1 } from './services/cric-envi1.service';
import { CricEnvironment2 } from './services/cric-envi2.service';


const routes:Routes = [
  {
    path: '',
    component: CricHomeComponent
  }
]

@NgModule({
  declarations: [
    CricHomeComponent,
    SquadsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    
  ],
  providers: [
    CricEnvironment1,
    CricEnvironment2
  ]
})
export class CricketModule { }
