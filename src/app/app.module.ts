import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilisateurComponent } from './composants/utilisateur/utilisateur.component';

//import { CatalogueServive} from './services/catalogue.service';

import { FormsModule } from '@angular/forms';
import { ProduitsComponent } from './produits/produits.component';
import { NewProductComponent } from './new-product/new-product.component';
import { HttpClientModule } from '@angular/common/http';
import { EditProductComponent } from './edit-product/edit-product.component';

@NgModule({
  declarations: [
    AppComponent,
    UtilisateurComponent,
    ProduitsComponent,
    NewProductComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     HttpClientModule ,
    FormsModule
    //pour envoyer des requetes http sur la partie backend
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
