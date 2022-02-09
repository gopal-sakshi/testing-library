import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { TestingLibraryModule } from 'testing-library';
import { Messages12Module } from 'testing-library';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Home11Component } from './modules/components/home11/home11.component';
import { Home12Component } from './modules/components/home12/home12.component';
import { config24 } from './config/config24';
import { SomeResolver12 } from './modules/classes/some-resolver12';

@NgModule({
  declarations: [
    AppComponent,
    Home11Component,
    Home12Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,    // this is important for matsnackbar & stuff
    AppRoutingModule,
    FlexLayoutModule,
    TestingLibraryModule,
    //Messages12Module.jingChak(config24.notification)
    Messages12Module
  ],
  providers: [
    SomeResolver12
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
