import {Component, OnInit} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {GetCategories, GetUsers} from "./store/app.actions";
import {AppState} from "./store/app.state";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  @Select(AppState.isLoading) isLoading$: Observable<boolean>;
  constructor(private store: Store) {
  }

  ngOnInit() {
    this.store.dispatch(new GetUsers());
    this.store.dispatch(new GetCategories());
  }


}
