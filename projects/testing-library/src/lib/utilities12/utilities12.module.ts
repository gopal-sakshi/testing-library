import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClubAddressComponent } from './components/club-address/club-address.component';
import { ClubTitlesComponent } from './components/club-titles/club-titles.component';



@NgModule({
  declarations: [
    ClubAddressComponent,
    ClubTitlesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ClubAddressComponent,
    ClubTitlesComponent
  ]
})
export class Utilities12Module { }
