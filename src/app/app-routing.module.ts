import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListContactsComponent } from './list-contacts/list-contacts.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';


const routes: Routes = [ 
    { path: '', redirectTo: '/list', pathMatch: 'full' }, 
    { path: 'list', component: ListContactsComponent }, 
    { path: 'create-contact', component: CreateContactComponent }, 
    { path: 'edit-contact/:id', component: EditContactComponent }, 
    { path: 'veiw-contact/:id', component: ViewContactComponent, pathMatch: 'full' }, 
    
    { path: '**', redirectTo: '/list'}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
