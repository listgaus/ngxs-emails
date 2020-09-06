import {Category, Email, User} from "../../assets/models/data-model";

export class AppStateModel {
  public categories: Category[];
  public subCategories: Category[];
  public users: User[];
  public parentIds: any[];
  public selectedCategory: string;
  public currentUser: User;
  public emails: Email[];
  public selectedEmail: {};
  public isLoading: boolean;
}
