import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CategoriesSelectorComponent } from './components/categories-selector/categories-selector.component';
import { EmailsListComponent } from './components/emails-list/emails-list.component';
import { SelectedEmailComponent } from './components/selected-email/selected-email.component';
import { HeaderComponent } from './components/header/header.component';
import {NgxsModule} from "@ngxs/store";
import {AppState} from "./store/app.state";
import { RecursiveSubCategoryComponent } from './components/recursive-sub-category/recursive-sub-category.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesSelectorComponent,
    EmailsListComponent,
    SelectedEmailComponent,
    HeaderComponent,
    RecursiveSubCategoryComponent
  ],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([AppState])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
