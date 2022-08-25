import { NgModule } from "@angular/core";
import { PTileComponent } from './components/p-tile/p-tile.component';
import { PGridComponent } from './components/p-grid/p-grid.component';
import { ProductsService } from "./services/products.service";
// import { CategoriesModule } from "projects/categories";

@NgModule({
    declarations: [
    PTileComponent,
    PGridComponent
  ],
    imports: [
        // CategoriesModule
    ],
    exports: [
        PTileComponent,
        PGridComponent
    ],
    providers: [
        ProductsService
    ]
})
export class ProductsModule {

}