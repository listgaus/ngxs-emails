import {Action, Selector, State, StateContext} from '@ngxs/store';
import {Injectable} from '@angular/core';
import {AppStateModel} from "./state.model";
import {GetUsers, SelectUser, UpdateSelectedCategory} from "./app.actions";
import * as db from "./../../assets/db/data.json";

@State<AppStateModel>({
  name: 'state',
  defaults: {
    categories: [],
    subCategories: [],
    users: [],
    parentIds: [],
    selectedCategory: {},
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
    console.log('setting user', action.paylaod)
    ctx.patchState({currentUser: action.paylaod});
  }
  @Action(UpdateSelectedCategory)
  async updateSelectCategory(ctx: StateContext<AppStateModel>, action: UpdateSelectedCategory) {
    ctx.patchState({selectedCategory: action.paylaod});
  }
  @Action(GetUsers)
  async getUsers(ctx: StateContext<AppStateModel>){
    console.log('getting users')
    ctx.patchState({users: db.users});
  }


  // @Action(LoginSuccess)
  // async setNotificationSettings(ctx: StateContext<SharedStateModel>, action: LoginSuccess) {
  //   await this.notificationService.connectToNotifications((settings: PushNotificationSettings) => {
  //     ctx.patchState({notificationSettings: settings})
  //   }, () => ctx.getState().notificationSettings);
  //   this.notificationService
  //     .channel<AccessPointStatusSignalR>("status")
  //     .pipe(filter(payload => !!payload))
  //     .subscribe(payload => {
  //       ctx.dispatch(new UpdateAccessPoints(payload));
  //       ctx.getState().statusChannelSubscription$.next(payload);
  //     });
  //
  //   this.notificationService
  //     .channel<NetworkStatusSignalR>("entitiesChanged")
  //     .pipe(filter(payload => !!payload))
  //     .subscribe(payload => {
  //       ctx.dispatch(new UpdateNetworks(payload));
  //     });
  // }

}
