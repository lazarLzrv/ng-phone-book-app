import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { PersonInfo } from '../shared/personInfo.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-view-contact',
    templateUrl: './view-contact.component.html',
    styleUrls: ['./view-contact.component.scss']
})

export class ViewContactComponent implements OnInit {
    unserInfo:PersonInfo;
    userId:number;

    constructor(private dataService:DataService,
                 private activatedRoute: ActivatedRoute,
                 private router: Router
    ) { }

    ngOnInit() { 
        this.userId = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
        this.unserInfo=this.dataService.getUser(this.userId);  
    }  

    deleteUser = () => {
        confirm('Are You Shure !');
        this.dataService.deleteUser(this.userId);
        this.router.navigate(['/list']);
    }

    editUser = () => {  
        this.router.navigate(['/edit-contact', this.userId]);
    }
}
