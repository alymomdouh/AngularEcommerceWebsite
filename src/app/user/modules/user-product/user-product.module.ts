import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProductRoutingModule } from './user-product-routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    UserProductRoutingModule
  ]
})
export class UserProductModule { }
