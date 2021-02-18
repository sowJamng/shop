import { Product } from './../model/product.model';
import { CatalogueService } from './../services/catalogue.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  private currentProduct: Product;
  private url: string;
  constructor(private router: Router, private activedRouter: ActivatedRoute , private catService: CatalogueService) { }

  ngOnInit() {
    // on recupere le id dans la console au niveau de params en decodans l url provennat de OnUpdateProduct
    // const url = atob(this.activedRouter.snapshot.params.id);
    // on doit declarer url comme atribut pour ne pas perdre lurl afin de la passer a la methode update
    this.url = atob(this.activedRouter.snapshot.params.id);
    this.catService.onGetRessource(this.url)
      .subscribe( data=>
        { this.currentProduct = data ; } ,
         err=> {console.log(err);
        });
    console.log(this.url);

    //console.log(this.activedRouter.snapshot.params.id);

  }
  onUpdateProduct(value: any){ // value est la valeur du formulaire
    this.catService.onUpdateRessource(this.url,value)
      .subscribe(data => { alert('mise a jour affectee avec succes');
      this.router.navigateByUrl('/products');
      } , err => { console.log(err);
      });

  }

}
