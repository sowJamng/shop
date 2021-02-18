import { EditProductComponent } from './edit-product/edit-product.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProduitsComponent} from './produits/produits.component' ;
import {NewProductComponent} from './new-product/new-product.component';
const routes: Routes = [
  {
   path: 'products' ,
   component: ProduitsComponent
   },
   {
     path: 'new-product', component: NewProductComponent
   },
   {
     path: '' , redirectTo: '/products', pathMatch: 'full'
   },
   {
    path: 'edit-product/:id', component: EditProductComponent // la route utilise un param id pour modification
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
