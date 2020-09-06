import {Component, Input, OnInit} from '@angular/core';
import {Category} from "../../../assets/models/data-model";
import {UpdateSelectedCategory} from "../../store/app.actions";
import {Select, Store} from "@ngxs/store";
import {AppState} from "../../store/app.state";
import {Observable} from "rxjs";

@Component({
  selector: 'recursive-sub-category',
  templateUrl: './recursive-sub-category.component.html',
  styleUrls: ['./recursive-sub-category.component.scss']
})
export class RecursiveSubCategoryComponent implements OnInit {
  @Select(AppState.selectedCategory) selectedCategory$: Observable<string>;
  @Input() categories: Category[] = [];
  @Input() parentIds?: string[] = [];
  @Input() currentCategory: Category;

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  isParent(categoryId): boolean{
    return this.parentIds.includes(categoryId);
  }

  selectCategory(id){
    this.store.dispatch(new UpdateSelectedCategory(id))
  }
}
