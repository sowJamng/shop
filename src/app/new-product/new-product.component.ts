import { CatalogueService } from './../services/catalogue.service';
import { Product } from './../model/product.model';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
 // public host: string = "http://localhost:8080";
  public currentProduct: any;
  public mode: number = 1;
  // constructor(private httpClient: HttpClient) { }
  constructor(private catService: CatalogueService ) {}
  ngOnInit() {
  }
  onSaveProduct(value: any) {
    this.catService.saveRessource(this.catService.host + '/produits', value)
          .subscribe(data => {
            // this.routeer.navigateByUrl("/products");
            this.currentProduct = data;
            this.mode = 2;
            // console.log(data);
        }, err => {console.log(err);
  });

 }
 onNewProduct() {
   this.mode = 1;
 }
}

