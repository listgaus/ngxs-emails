import { Component } from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {AppState} from "../../store/app.state";
import {Observable} from "rxjs";
import {Category, Email} from "../../../assets/models/data-model";
import {SelectEmail} from "../../store/app.actions";

@Component({
  selector: 'emails-list',
  templateUrl: './emails-list.component.html',
  styleUrls: ['./emails-list.component.scss']
})
export class EmailsListComponent   {
  @Select(AppState.emails) emails$: Observable<Email[]>;
  @Select(AppState.selectedEmail) selectedEmail$: Observable<Email>;
  selectedEmail: Email = undefined;

  constructor(private store: Store) {
  }

  selectEmail(email: Email) {
    this.store.dispatch(new SelectEmail(email))
  }
}
