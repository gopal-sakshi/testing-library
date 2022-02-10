import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { config24 } from './config/config24';
import { SomeResolver12 } from './modules/home-module11/classes/some-resolver12';
import { LibNotification12, some_injection_token } from 'testing-library';
import { AppNotification12 } from './modules/home-module11/classes/app-notification12';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,    // this is important for matsnackbar & stuff
    AppRoutingModule,
    FlexLayoutModule,
    // TestingLibraryModule,
    // Messages12Module.jingChak(config24.notification)
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
