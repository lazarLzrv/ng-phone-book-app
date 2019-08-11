import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service'; 

@Component({
    selector: 'app-list-contacts',
    templateUrl: './list-contacts.component.html',
    styleUrls: ['./list-contacts.component.scss']
})

export class ListContactsComponent implements OnInit {
    listOfUsers: any[] = [];
    searchBox:string;

    constructor(private dataService:DataService ) { }

    ngOnInit() {
        this.listOfUsers = this.dataService.listOfUsers;
    }  
}
