import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModule11RoutingModule } from './home11-routing.module';
import { LibNotification12, Messages12Module, some_injection_token, TestingLibraryModule } from 'testing-library';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SomeResolver13 } from './classes/some-resolver13';
import { Home11Component } from './components/home11/home11.component';
import { Home12Component } from './components/home12/home12.component';
import { AppNotification12 } from './classes/app-notification12';


@NgModule({
  declarations: [
    Home11Component,
    Home12Component
  ],
  imports: [
    CommonModule,
    HomeModule11RoutingModule,
    Messages12Module,
    FlexLayoutModule,
    TestingLibraryModule
  ],
  providers: [
    SomeResolver13,
    {
      provide: some_injection_token,
      // useClass: LibNotification12,
      useClass: AppNotification12
    }

  ]
})
export class HomeModule11Module { }
