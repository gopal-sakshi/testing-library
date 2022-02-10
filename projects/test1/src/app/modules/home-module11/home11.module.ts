import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModule11RoutingModule } from './home11-routing.module';

// import { LibNotification12, some_injection_token, Messages12Module, TestingLibraryModule } from 'testing-library';
import { Messages12Module, TestingLibraryModule } from 'testing-library';

import { FlexLayoutModule } from '@angular/flex-layout';
import { SomeResolver13 } from './classes/some-resolver13';
import { Home11Component } from './components/home11/home11.component';
import { Home12Component } from './components/home12/home12.component';

// import { AppNotification12 } from './classes/app-notification12';


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
    /**
     *    Moved these providers (some_injection_token) into app.module.ts 
     *      meaning, services provided at root module (ie app.module.ts)
     *      and not at home11 module level...

    {
      provide: some_injection_token,
      useClass: LibNotification12,
      // useClass: AppNotification12
    }
    */

  ]
})
export class HomeModule11Module { }
