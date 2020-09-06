import {Action, Selector, State, StateContext} from '@ngxs/store';
import {Injectable} from '@angular/core';
import {AppStateModel} from "./state.model";
import {GetCategories, GetUsers, SelectEmail, SelectUser, UpdateSelectedCategory} from "./app.actions";
import * as db from "./../../assets/db/data.json";

@State<AppStateModel>({
  name: 'state',
  defaults: {
    categories: [],
    subCategories: [],
    users: [],
    parentIds: [],
    selectedCategory: '',
    currentUser: undefined,
    emails: [],
    selectedEmail: undefined
  }
})
@Injectable()

export class AppState {
  constructor() {
  }

  @Selector([AppState])
  static categories(state: AppStateModel): any[] {
    return state.categories;
  }

  @Selector([AppState])
  static subCategories(state: AppStateModel): any[] {
    return state.subCategories;
  }

  @Selector([AppState])
  static parentIds(state: AppStateModel): any[] {
    return state.parentIds;
  }

  @Selector([AppState])
  static users(state: AppStateModel): any[] {
    return state.users;
  }

  @Selector([AppState])
  static selectedCategory(state: AppStateModel): {} {
    return state.selectedCategory;
  }

  @Selector([AppState])
  static currentUser(state: AppStateModel): {} {
    return state.currentUser;
  }

  @Selector([AppState])
  static selectedEmail(state: AppStateModel): {} {
    return state.selectedEmail;
  }

  @Selector([AppState])
  static emails(state: AppStateModel): {} {
    return state.emails;
  }

  @Action(SelectUser)
  async selectUser(ctx: StateContext<AppStateModel>, action: SelectUser) {
    ctx.patchState({currentUser: action.paylaod});
  }

  @Action(UpdateSelectedCategory)
  async updateSelectCategory(ctx: StateContext<AppStateModel>, action: UpdateSelectedCategory) {
    let emails = db.emails;
    let filter = emails.filter(mail => mail.categoryId === action.paylaod);
    ctx.patchState({selectedCategory: action.paylaod, emails: filter, selectedEmail: undefined});
  }

  @Action(GetUsers)
  async getUsers(ctx: StateContext<AppStateModel>) {
    ctx.patchState({users: db.users});
  }

  @Action(SelectEmail)
  async selectEmail(ctx: StateContext<AppStateModel>, action: SelectEmail){
    ctx.patchState({selectedEmail: action.paylaod})
  }
  @Action(GetCategories)
  async getCategories(ctx: StateContext<AppStateModel>) {
    let dbCategories = db.categories;
    let categories = [];
    let subCategories = [];
    dbCategories.map(c => {
      if (c.parentId === null) {
        categories.push(c)
      } else (subCategories.push(c))
    })

    let uniqeSet = new Set(subCategories.map((o) => o.parentId));
    let parentIds = [...uniqeSet];
    ctx.patchState({categories: categories, subCategories: subCategories, parentIds: parentIds});
  }

}
