
import {ReactiveFormsModule} from '@angular/forms';
import {ProductRouting} from './product.routing';
import {ProductService} from '../../services/managers/product.service';
import {NgbdModalContent, ProductAllComponent} from './all/product.all.component';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';


import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  imports: [
    ProductRouting,
    HttpClientModule,
    CommonModule,
    NgbModule,
    ReactiveFormsModule
  ],
  declarations: [ProductAllComponent, NgbdModalContent],
  providers: [ProductService],
  exports: [ProductAllComponent],
  bootstrap: [ProductAllComponent],
  entryComponents: [NgbdModalContent]
})
export class ProductModule { }