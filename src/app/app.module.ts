import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';


import { HeaderComponent } from './header/header.component';
import { ListContactsComponent } from './list-contacts/list-contacts.component'; 
import { CreateContactComponent } from './create-contact/create-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; 
import { CreateContactBtnComponent } from './create-contact-btn/create-contact-btn.component';
import { BottomNavComponent } from './bottom-nav/bottom-nav.component';
import { MessagesComponent } from './messages/messages.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
  };

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListContactsComponent, 
    CreateContactComponent, 
    ViewContactComponent, 
    EditContactComponent, 
    CreateContactBtnComponent, BottomNavComponent, MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
    PerfectScrollbarModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
