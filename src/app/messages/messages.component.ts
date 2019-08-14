import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
    sysMsg:string='';
    sysMsgStat:boolean;
    constructor(private dataService:DataService) { }

     ngOnInit() {
        
        this.dataService.sysMsgText.subscribe((sysMsg) =>{  
            this.sysMsg = sysMsg; 
        })
        this.dataService.sysMsgStat.subscribe((sysMsgStat) =>{  
            this.sysMsgStat = sysMsgStat; 
        })
    }

}
