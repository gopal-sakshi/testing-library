import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { TestingLibraryModule } from 'testing-library';
import { Messages12Module } from 'testing-library';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,    // this is important for matsnackbar & stuff
    AppRoutingModule,
    FlexLayoutModule,
    TestingLibraryModule,
    Messages12Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
