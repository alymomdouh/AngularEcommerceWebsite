import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProductRoutingModule } from './user-product-routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    ProductItemComponent
  ],
  imports: [
    CommonModule,
    UserProductRoutingModule,
    SharedModule
  ]
})
export class UserProductModule { }
