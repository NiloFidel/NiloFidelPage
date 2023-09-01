import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { IndexComponent } from './index/index.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingComponent } from './landing.component';
import { AppComponent } from '../app.component';



@NgModule({
  declarations: [
    IndexComponent,
    FooterComponent,
    NavbarComponent,
    
    LandingComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
  ]
})
export class LandingModule { }
