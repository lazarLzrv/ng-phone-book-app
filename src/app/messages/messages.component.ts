import { Component, OnInit } from '@angular/core'; 
import { MessagesService } from '../shared/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
    sysMsg:string='';
    sysMsgStat:boolean;
    constructor(private msgService: MessagesService) { }

     ngOnInit() {
        
        this.msgService.sysMsgText.subscribe((sysMsg) =>{  
            this.sysMsg = sysMsg; 
        })
        this.msgService.sysMsgStat.subscribe((sysMsgStat) =>{  
            this.sysMsgStat = sysMsgStat; 
        })
    }

}
