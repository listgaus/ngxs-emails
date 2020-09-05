import {User} from "../../assets/models/data-model";

export class AppStateModel {
  public categories: any[];
  public subCategories: any[];
  public users: any[];
  public parentIds: any[];
  public selectedCategory: {};
  public currentUser: User;
  public emails: any[];
  public selectedEmail: {};
}
