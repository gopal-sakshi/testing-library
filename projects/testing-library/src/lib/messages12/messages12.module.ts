import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Notification12Component } from './components/notification12/notification12.component';
import { Notification13Component } from './components/notification13/notification13.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { injection_token2, some_injection_token } from './public-api';



@NgModule({
  declarations: [
    Notification12Component,
    Notification13Component
  ],
  imports: [
    CommonModule,
    MatSnackBarModule,
    FlexLayoutModule
  ],
  exports: [
    Notification12Component,    // I forgot to the components to exports array... 
                                    // this error tortured me for like 2 hrs... badu

    /*
      1. If 'lib-notification12' is an Angular component and it has 'message' input, then verify that it is part of this module.
      2. If 'lib-notification12' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.
      3. To allow any property add 'NO_ERRORS_SCHEMA' to the '@NgModule.schemas' of this component.
    */                                    
    Notification13Component
  ]
})
export class Messages12Module { 
  static forChild(config:any):ModuleWithProviders<Messages12Module> {
  //static forChild(config:any):ModuleWithProviders<any> {

    return {
      ngModule: Messages12Module,
      providers: [
        // {
        //   provide: some_injection_token,
        //   useValue: config
        // },
        {
          provide: injection_token2,
          useValue: config
        }
      ]
    };
  }
}
