import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { config24 } from './config/config-files';
import { SomeResolver12 } from './modules/home-module11/classes/some-resolver12';
import { AppNotification12 } from './modules/home-module11/classes/app-notification12';
import { Empty12Component } from './empty12.component';
import { Messages12Module, some_injection_token } from 'projects/testing-library';


@NgModule({
  declarations: [
    AppComponent,
    Empty12Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,    // this is important for matsnackbar & stuff
    AppRoutingModule,
    FlexLayoutModule,
    // TestingLibraryModule,
    Messages12Module.forChild(config24.notification)
    // Messages12Module
  ],
  providers: [
    SomeResolver12,
    {
      provide: some_injection_token,
      // useClass: LibNotification12,
      useClass: AppNotification12
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
