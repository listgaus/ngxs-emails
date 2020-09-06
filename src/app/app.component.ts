import {Component, OnInit} from '@angular/core';
import * as data from '../assets/db/data.json';
import {Category} from "../assets/models/data-model";
import {Store} from "@ngxs/store";
import {GetCategories, GetUsers} from "./store/app.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private store: Store) {
  }
  dbCategories: any[];
  categories: any[];
  subCategories: any[];
  headers: any[];

  ngOnInit() {
    this.store.dispatch(new GetUsers());
    this.store.dispatch(new GetCategories());
    // this.dbCategories = data.categories;
    // this.categories = this.dbCategories.filter(c=> c.parentId === null);
    // this.subCategories = this.dbCategories.filter(c=> c.parentId !== null).sort((a, b) => {
    //   return a.parentId = b.parentId;
    // } );
    // let uniqeSet = new Set(this.subCategories.map((o) => o.parentId));
    // this.headers = [...uniqeSet];
  }


}
