import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {

  nom: String;
  age:number;
  email:string;
  hobby:hobby;
  constructor() {
    this.nom="jamdong";
    this.age=23;
    this.email="samaamamal@gmail.com";
    this.hobby={
      hobbydeux:"lire",
      hobbyun:"basket",
      hobbytrois:"Apprendre"
    };
  }

  ngOnInit() {
  }
  onClick(){
    alert('Pas dinfos supplementaire pour le moment');
  }
}
  interface hobby{
    hobbyun: string;
    hobbydeux:string;
    hobbytrois:string;
  }


