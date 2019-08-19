import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
    sysMsgEmiter = new BehaviorSubject(undefined);
    sysMsgText =this.sysMsgEmiter.asObservable()

    setSysMsg = (sysMsg:string, ) => {  
        this.sysMsgEmiter.next(sysMsg);  
    }    
    
    sysMsgStatEmiter = new BehaviorSubject(false);
    sysMsgStat =this.sysMsgStatEmiter.asObservable()

    setSysMsgStat = (sysMsgStat:boolean) => {  
        this.sysMsgStatEmiter.next(sysMsgStat);  
    }  
    
    constructor() { }
}
