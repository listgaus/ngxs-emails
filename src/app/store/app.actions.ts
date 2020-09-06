import {Email, User} from "../../assets/models/data-model";

export class SelectUser {
  static readonly type = '[AppState] Selecting User';
  constructor(public paylaod: User) {
  }
}
export class UpdateSelectedCategory {
  static readonly type = '[AppState] Updating Selected Category';
  constructor(public paylaod: string) {
  }
}

export class GetUsers {
  static readonly type = '[AppState] Getting users from db';
  constructor() {}
}

export class GetCategories {
  static readonly type = '[AppState] Getting categories from db';
  constructor() {}
}

export class SelectEmail {
  static readonly type = '[AppState] Updating selected email';
  constructor(public paylaod: Email) {
  }
}
