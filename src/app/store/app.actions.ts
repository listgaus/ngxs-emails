import {User} from "../../assets/models/data-model";

export class SelectUser {
  static readonly type = '[AppState] Selecting User';
  constructor(public paylaod: User) {
  }
}
export class UpdateSelectedCategory {
  static readonly type = '[AppState] Updating Selected Category';
  constructor(public paylaod: {}) {
  }
}

export class GetUsers {
  static readonly type = '[AppState] Getting users from db';
  constructor() {}
}
