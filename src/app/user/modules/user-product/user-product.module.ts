import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProductRoutingModule } from './user-product-routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    SharedModule,
    RouterModule,
    UserProductRoutingModule,
  ]
})
export class UserProductModule { }
