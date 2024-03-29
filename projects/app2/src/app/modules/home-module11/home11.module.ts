import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModule11RoutingModule } from './home11-routing.module';


import { FlexLayoutModule } from '@angular/flex-layout';
import { SomeResolver13 } from './classes/some-resolver13';
import { Home11Component } from './components/home11/home11.component';
import { Home12Component } from './components/home12/home12.component';
import { config25 } from '../../config/config-files';
import { ForwardRef12Component } from './components/forward-ref12/forward-ref12.component';
import { FactoryRef1 } from './services/factory-ref1';
import { FactoryRef2 } from './services/factory-ref2';
import { Image23Module, LibNotification12, Messages12Module, some_injection_token } from 'projects/testing-library';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { AppProductsComponent } from './components/app-products/app-products.component';
import { AppCategoriesComponent } from './components/app-categories/app-categories.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsModule } from 'projects/products';
import { CategoriesModule } from 'projects/categories';

@NgModule({
  declarations: [
    Home11Component,
    Home12Component,
    ForwardRef12Component,
    ImageUploadComponent,
    AppProductsComponent,
    AppCategoriesComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeModule11RoutingModule,
    Messages12Module.forChild(config25.notification),
    FlexLayoutModule,
    Image23Module,

    // PRODUCT & CATEGORY MODULE
    ProductsModule,
    CategoriesModule

  ],
  providers: [
    SomeResolver13,
    /**
     *    Moved these providers (some_injection_token) into app.module.ts 
     *      meaning, services provided at root module (ie app.module.ts)
     *      and not at home11 module level...
    */

    // {
    //   provide: some_injection_token,
    //   useClass: LibNotification12,
    //   // useClass: AppNotification12
    // },
    
    FactoryRef1,
    FactoryRef2
  ]
})
export class HomeModule11Module { }
