import {Component, Input, OnInit} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {AppState} from "../../store/app.state";
import {Observable} from "rxjs";
import {Category, User} from "../../../assets/models/data-model";
import {UpdateSelectedCategory} from "../../store/app.actions";

@Component({
  selector: 'categories-selector',
  templateUrl: './categories-selector.component.html',
  styleUrls: ['./categories-selector.component.scss']
})
export class CategoriesSelectorComponent implements OnInit {
  @Select(AppState.categories) categories$: Observable<Category[]>;
  @Select(AppState.subCategories) subCategories$: Observable<Category[]>;
  @Select(AppState.parentIds) parentIds$: Observable<string[]>;
  @Select(AppState.selectedCategory) selectedCategory$: Observable<string>;
  parentIds: string[] = [];
  constructor(private store: Store) { }

  ngOnInit(): void {
  this.parentIds$.subscribe(ids => this.parentIds = ids);
  }

  isHeader(categoryId): boolean{
    return this.parentIds.includes(categoryId);
  }

  selectCategory(id){
    this.store.dispatch(new UpdateSelectedCategory(id))
  }

}
