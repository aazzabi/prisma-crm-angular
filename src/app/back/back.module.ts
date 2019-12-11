import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BackRouting} from './back.routing';
import {BackComponent} from './back.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DashboardLayoutModule} from './dashboardLayout/dashboard.layout.module';
import {AuthGuard} from '../services/security/auth.guard';
import {ClaimBackModule} from './claim/claim.back.module';
import {ProductModule} from './product/product.module';
import {PromotionModule} from './promotion/promotion.module';
import {PromotionService} from '../services/managers/promotion.service';
import { ScoringAgentComponent } from './scoringAgent/scoring.agent.component';
import {OffreModule} from './offre/offre.module';
import {OffreService} from '../services/managers/offre.service';
import {PackModule} from './pack/pack.module';
import {PackService} from '../services/managers/pack.service';
import {Affiche1Component} from './pack/affiche1/affiche1.component';
import {AppComponent} from '../app.component';
import {MatDatepickerModule, MatDialogModule, MatFormFieldModule, MatNativeDateModule, MatSliderModule} from '@angular/material';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { CartsComponent } from './carts/carts.component';
import { QuotationsComponent } from './quotations/quotations.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserModule} from './User/user.module';
import {VehiculeModule} from './vehicule/vehicule.module';
import {ToastrModule} from 'ngx-toastr';
import {RepairModule} from './repairs/repair.module';
import {FullCalendarModule} from '@fullcalendar/angular';


@NgModule({
  imports: [
    BackRouting,
    DashboardLayoutModule,
    ClaimBackModule,
    ProductModule,
    PromotionModule,
    OffreModule,
    PackModule, MatDialogModule, CommonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatSliderModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserModule,
    RepairModule,
    VehiculeModule,
    FullCalendarModule
  ],
  declarations: [
    BackComponent,
    DashboardComponent,
    Affiche1Component,
    ScoringAgentComponent,
    OrdersComponent,
    ProductsComponent,
    CartsComponent,
    QuotationsComponent,
    InvoicesComponent,
    EditOrderComponent,
    ViewOrderComponent,
    UserProfileComponent
  ],
  providers: [AuthGuard, PromotionService, OffreService, PackService, PromotionService],
  entryComponents: [Affiche1Component]
})
export class BackModule {
}
