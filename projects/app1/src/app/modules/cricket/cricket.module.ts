import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CricHomeComponent } from './components/cric-home/cric-home.component';
import { SquadsComponent } from './components/squads/squads.component';
import { RouterModule, Routes } from '@angular/router';
import { CricEnvironment1 } from './services/cric-envi1.service';
import { CricEnvironment2 } from './services/cric-envi2.service';
import { Cricket12Module } from 'testing-library';
import { GOP_ENVI_CRICKET } from './classes/gop-envi-cricket';
import { DummyComponent } from './components/dummy/dummy.component';


const routes:Routes = [
  {
    path: '',
    component: CricHomeComponent
  }
]

@NgModule({
  declarations: [
    CricHomeComponent,
    SquadsComponent,    
    DummyComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Cricket12Module.jingChakCricket(GOP_ENVI_CRICKET),
      // since we are using this library comp ---> <lib-club-cricket>
          // STEP 1 ----->      we need to import the whole lib-module here
          // STEP 2 ----->      we need to add the 'lib-club-cricket'    in exports array of 'Cricket12Module'
          // STEP 3 (optional) ----->      we need to add 'lib-club-cricket' in public-api (so that we can import directly & not give exact path)
  ],
  providers: [
    CricEnvironment1,
    CricEnvironment2
  ]
})
export class CricketModule { }
