import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
public produits: any;
public size: number = 5;
public currentPage: number=0;
public totalPages: number;
public pages: Array<number>;
public currrentKeyword: string = "";
  //constructor(private catService:CatalogueServive ){ }
  constructor(private httpClient: HttpClient , private router: Router) { }

  ngOnInit() {
  }
  onGetProducts(){
    this.httpClient.get("http://localhost:8080/produits?page="+this.currentPage+"&size="+this.size) //il retourne un objet de type observable
    //subscribe: jattend des donnees s elles arrivent qu'il me les donne
    //this.catService.getProducts(this.currentPage,this.size)
          .subscribe(data=> {
            this.totalPages=data["page"].totalPages;
            this.pages=new Array<number>(this.totalPages);
            this.produits=data;
        },
        err=>{ console.log(err);
        })
}
 onPageProduct(i){
   this.currentPage=i;
   //this.onGetProducts();  on va le commenter pour ctualiser la recherche
   this.chercherProducts()
 }
 onChercher(form:any){
this.currentPage=0;
this.currrentKeyword=form.keyword;
this.chercherProducts();

 }
 chercherProducts(){
   //console.log(value);
   //this.currrentKeyword=form.keyword;
   this.httpClient.get("http://localhost:8080/produits/search/bydesignationPage?mc="+this.currrentKeyword+"&page="+this.currentPage+"&size="+this.size) //il retourne un objet de type observable
    //subscribe: jattend des donnees s elles arrivent qu'il me les donne
    //this.catService.getProducts(this.currentPage,this.size)
          .subscribe(data=> {
            this.totalPages=data["page"].totalPages;
            this.pages=new Array<number>(this.totalPages);
            this.produits=data;
        },err=>{ console.log(err);
        })
 }
 onDeleteProduct(p){
   let conf=confirm("Are you sure for delete it?");
   if(conf) {
     console.log(p);
     this.httpClient.delete(p._links.self.href)

       .subscribe(data=> {
         this.chercherProducts();
     }, err=> {
       console.log(err)
     })

    }
  }
  onUpdateProduct(p) {
    let  url = p._links.self.href;
    // this.router.navigateByUrl('/edit-product/'+p.id);
    // aulieu de transmettre le id on transmet l url
    this.router.navigateByUrl('/edit-product/' + btoa(url));
  }
}
