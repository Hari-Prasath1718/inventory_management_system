import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Layout } from './components/layout/layout';
import { Header } from './components/header/header';
import { Sidebar } from './components/sidebar/sidebar';
import { Dashboard } from './allcomponents/dashboard/dashboard';
import { Home } from './allcomponents/home/home';
import { Products } from './allcomponents/products/products';
import { RouterLink, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Stock } from './allcomponents/stock/stock';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { Sale } from './allcomponents/sale/sale';
import { CategoryModels } from './allcomponents/category-models/category-models';
@NgModule({
  declarations: [
    App,
    Layout,
    Header,
    Sidebar,
    Dashboard,
    Home,
    Products,
    Stock,
    Sale,
    CategoryModels
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
