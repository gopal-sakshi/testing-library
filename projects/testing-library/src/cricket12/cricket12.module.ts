import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SquadCricketComponent } from './components/squad-cricket/squad-cricket.component';
import { ClubCricketComponent } from './components/club-cricket/club-cricket.component';
import { GOP_ENVI } from './classes/cric-tokens';



@NgModule({
  declarations: [
    SquadCricketComponent,
    ClubCricketComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SquadCricketComponent
  ]
})
export class Cricket12Module {
  public jingChakCricket(config:any) : ModuleWithProviders<Cricket12Module> {
    return {
      ngModule: Cricket12Module,
      providers: [
        {
          provide: GOP_ENVI,
          useClass: config.envi
        }        
      ]
    }
  }
 }
