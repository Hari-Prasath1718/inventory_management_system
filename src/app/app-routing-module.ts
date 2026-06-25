import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Layout } from './components/layout/layout';
import { Dashboard } from './allcomponents/dashboard/dashboard';
import { Home } from './allcomponents/home/home';
import { Products } from './allcomponents/products/products';
import { Stock } from './allcomponents/stock/stock';
import { Sale } from './allcomponents/sale/sale';
import { CategoryModels } from './allcomponents/category-models/category-models';
import { Settings } from './allcomponents/settings/settings';
import { Reports } from './allcomponents/reports/reports';

const routes: Routes = [
  {path :'',component:Layout,children:[
    {path:'',component:Dashboard},
    {path:'home',component:Home},
    {path:'product',component:Products},
    {path:'stock',component:Stock},
    {path:'sale',component:Sale},
    {path:'category_models',component:CategoryModels},
    {path:'settings',component:Settings},
    {path:'reports',component:Reports}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
