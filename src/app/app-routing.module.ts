import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {HomeComponent} from './views/home/home.component';
import {ProductCrudComponent} from './views/product-crud/product-crud.component';
import {ProductCreateComponent} from './components/product/product-create/product-create.component';

const routes: Routes = [
  {
  path: "",
  component: HomeComponent //define o componente(view) home.component.html como a página inicial
  },
  {
    path: "products",
    component: ProductCrudComponent 
  },
  {
    path: "products/create",
    component: ProductCreateComponent 
  }
];

  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }