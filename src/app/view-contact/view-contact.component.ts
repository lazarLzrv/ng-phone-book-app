import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { PersonInfo } from '../shared/personInfo.model';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-view-contact',
    templateUrl: './view-contact.component.html',
    styleUrls: ['./view-contact.component.scss']
})

export class ViewContactComponent implements OnInit {
    title:string ="View Contact"
    unserInfo:PersonInfo; 
    userId:number;

    constructor(private dataService:DataService,
                private activatedRoute: ActivatedRoute, 
    ) { 
        this.dataService.setTitle(this.title)
    }

    ngOnInit() {  
        this.userId = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
        this.unserInfo=this.dataService.getUser(this.userId); 
    }  
}
