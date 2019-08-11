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
    showSysMsg:boolean=false;
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
        let answer = confirm('Are You Shure !');
        if(answer){
            this.showSysMsg = true; 
            this.dataService.deleteUser(this.userId);
            setTimeout(()=>{ this.router.navigate(['/list']);}, 3000);
        }
        
    }

    editUser = () => {  
        this.router.navigate(['/edit-contact', this.userId]);
    }
 
}
