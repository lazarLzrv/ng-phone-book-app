import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../shared/data.service'; 
import { MessagesService } from '../shared/messages.service';

@Component({
  selector: 'app-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.scss']
})
export class BottomNavComponent implements OnInit {
    userId:number;
    routerUrl:string;

    constructor(private dataService:DataService,
                private activatedRoute: ActivatedRoute,
                private msgService: MessagesService,
                public router: Router        
    ) {  
    }

    ngOnInit() {
        this.userId = parseInt(this.activatedRoute.snapshot.paramMap.get('id')); 
    }
    
    deleteUser = () => {
        let answer = confirm('Are You Shure !');
        if(answer){ 
            this.dataService.deleteUser(this.userId);
            this.msgService.setSysMsgStat(true); 
            this.msgService.setSysMsg('Successfully deleted contacts info !'); 
            
            setTimeout(()=>{
                this.msgService.setSysMsgStat(false); 
                this.router.navigate(['/list']);}
            ,3000);
        } 
    }

    editUser = () => {  
        this.router.navigate(['/edit-contact', this.userId]); 
    }
}
