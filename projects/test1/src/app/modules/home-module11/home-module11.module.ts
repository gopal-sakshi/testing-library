import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModule11RoutingModule } from './home-module11-routing.module';
import { Messages12Module } from 'testing-library';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SomeResolver13 } from '../classes/some-resolver13';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule11RoutingModule,
    Messages12Module,
    FlexLayoutModule
  ],
  providers: [
    SomeResolver13
  ]
})
export class HomeModule11Module { }
