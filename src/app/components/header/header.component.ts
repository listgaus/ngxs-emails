import { Component, OnInit } from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {AppState} from "../../store/app.state";
import {Observable} from "rxjs";
import {SelectUser} from "../../store/app.actions";
import {User} from "../../../assets/models/data-model";

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Select(AppState.users) users$: Observable<any[]>;
  @Select(AppState.currentUser) selectedUser$: Observable<User>;
  constructor(public  readonly store: Store) { }

  ngOnInit(): void {
    this.users$.subscribe(users => {
      this.store.dispatch(new SelectUser(users[Math.floor(Math.random() * users.length)]))
    });
  }

}
