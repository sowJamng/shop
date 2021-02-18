
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product.model';
@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  public host:string="http://localhost:8080";

  constructor(private httpClient: HttpClient) {}
  public getProducts( page: number , size: number ) {
    return this.httpClient.get(this.host+"/produits?page="+page+"&sise="+size); //il retourne un objet de type observable
  }

  public deleteRessource(url) {
   return this.httpClient.delete(url);
  }
  public saveRessource(url, data){
    return this.httpClient.post(url,data);
  }
  public onGetRessource(url):Observable<Product> {
    return this.httpClient.get<Product>(url);
  }
  public onUpdateRessource(url, data){
    return this.httpClient.put(url,data); // put = methode update
  }
   }

