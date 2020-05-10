import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContractOptionsComponent } from './boxes/contract-options/contract-options.component';

import { BoxPackagesService } from "./box-packages.service";
import { ContractOptionsBoxesComponent } from './boxes/contract-options-boxes/contract-options-boxes.component';

@NgModule({
  declarations: [
    AppComponent,
    ContractOptionsComponent,
    ContractOptionsBoxesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BoxPackagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
