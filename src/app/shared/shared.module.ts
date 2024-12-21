import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { SelectComponent } from './components/select/select.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HeaderComponent,
    SelectComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    SharedRoutingModule
  ],
  exports: [
    //CommonModule,
    HeaderComponent,
    SelectComponent,
    SpinnerComponent,
    FormsModule,
    // RouterModule,
    //BrowserModule
  ]
})
export class SharedModule { }
