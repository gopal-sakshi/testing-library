import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClubsComponent } from './components/clubs/clubs.component';
import { PlayersComponent } from './components/players/players.component';
import { FootballHomeComponent } from './components/football-home/football-home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Routes, RouterModule } from '@angular/router';
import { Messages12Module, Utilities12Module } from 'testing-library';
import { MatButtonModule } from '@angular/material/button';
import { config26 } from '../../config/config-files';


const footballRoutes:Routes = [
  {
    path: '',
    component: FootballHomeComponent
  },
  {
    path: 'clubs',
    component: ClubsComponent
  }
]

@NgModule({
  declarations: [
    ClubsComponent,
    PlayersComponent,
    FootballHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(footballRoutes),
    FlexLayoutModule,
    Utilities12Module,
    MatButtonModule,
    Messages12Module.forChild(config26.notification),
  ]
})
export class FootballModule { }
