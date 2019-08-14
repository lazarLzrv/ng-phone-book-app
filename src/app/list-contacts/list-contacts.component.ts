import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service'; 

@Component({
    selector: 'app-list-contacts',
    templateUrl: './list-contacts.component.html',
    styleUrls: ['./list-contacts.component.scss']
})

export class ListContactsComponent implements OnInit {
    title:string ="Phone Book"
    listOfUsers: any[] = []; 
    searchBox:string;
    config = { 
        'wheelSpeed':'0.2',
        'swipeEasing':false
    } 

    constructor(private dataService:DataService ) { 
        this.dataService.setTitle(this.title)
    }

    ngOnInit() {
        this.listOfUsers = this.dataService.listOfUsers;
        
 
    }  
}
