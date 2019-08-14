import { Injectable } from '@angular/core';
import { PersonInfo } from './personInfo.model'; 
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
    title:string;  

    sysMsgEmiter = new BehaviorSubject(undefined);
    sysMsgText =this.sysMsgEmiter.asObservable()

    setSysMsg(sysMsg:string, ){  
        this.sysMsgEmiter.next(sysMsg);  
    }    
    
    sysMsgStatEmiter = new BehaviorSubject(false);
    sysMsgStat =this.sysMsgStatEmiter.asObservable()

    setSysMsgStat(sysMsgStat:boolean){  
        this.sysMsgStatEmiter.next(sysMsgStat);  
    }    

    listOfUsers: any[] = [
        { 
            firstName: 'Ivan',
            lastName: 'Ivanov',
            phoneNumbers:{
                homeNumber: '0888376556', 
                officeNumber: '0884376556', 
                workNumber: '0884376556'
            } 
        },
        { 
            firstName: 'Petur',
            lastName: 'Petrov',
            phoneNumbers:{
                homeNumber: '0888376556', 
                officeNumber: '0884376556', 
                workNumber: '0884376556'
            } 
        },
        { 
            firstName: 'Ivan',
            lastName: 'Ivanov',
            phoneNumbers:{
                homeNumber: '0888376556', 
                officeNumber: '0884376556', 
                workNumber: '0884376556'
            } 
        },
        { 
            firstName: 'Petur',
            lastName: 'Petrov',
            phoneNumbers:{
                homeNumber: '0888376556', 
                officeNumber: '0884376556', 
                workNumber: '0884376556'
            } 
        },
        { 
            firstName: 'Ivan',
            lastName: 'Ivanov',
            phoneNumbers:{
                homeNumber: '0888376556', 
                officeNumber: '0884376556', 
                workNumber: '0884376556'
            } 
        },
        { 
            firstName: 'Dragan',
            lastName: 'Vulkov',
            phoneNumbers:{
                homeNumber: '0888376556', 
                officeNumber: '0884376556', 
                workNumber: '0884376556'
            } 
        },
        { 
            firstName: 'Dimitar',
            lastName: 'Petkov',
            phoneNumbers:{
                homeNumber: '0888376556', 
                officeNumber: '0884376556', 
                workNumber: '0884376556'
            } 
        },
        { 
            firstName: 'Petko',
            lastName: 'Shopov',
            phoneNumbers:{
                homeNumber: '0888376556', 
                officeNumber: '0884376556', 
                workNumber: '0884376556'
            } 
        },
        { 
            firstName: 'Dimitar',
            lastName: 'Petkov',
            phoneNumbers:{
                homeNumber: '0888376556', 
                officeNumber: '0884376556', 
                workNumber: '0884376556'
            } 
        },
        { 
            firstName: 'Petko',
            lastName: 'Shopov',
            phoneNumbers:{
                homeNumber: '0888376556', 
                officeNumber: '0884376556', 
                workNumber: '0884376556'
            } 
        },
        { 
            firstName: 'Dimitar',
            lastName: 'Petkov',
            phoneNumbers:{
                homeNumber: '0888376556', 
                officeNumber: '0884376556', 
                workNumber: '0884376556'
            } 
        },
        { 
            firstName: 'Petko',
            lastName: 'Shopov',
            phoneNumbers:{
                homeNumber: '0888376556', 
                officeNumber: '0884376556', 
                workNumber: '0884376556'
            } 
        }
    ]; 

    constructor( ) {
        this.setToLocalHost();
     }


    setToLocalHost = () =>{
        localStorage.setItem('dataSource', JSON.stringify(this.listOfUsers));  
    }
     
     setTitle = (title:string) => {
         this.title=title;  
    }  

    getTitle(){
        return this.title;
     }
 
    addToList = (data:PersonInfo) => {  
        this.listOfUsers.push(data)
        this.setToLocalHost()
    }

    getListofUsers = () =>{
        return JSON.parse(localStorage.getItem('dataSource'));
    }
    
    deleteUser = (index:number) => {  
        this.listOfUsers.splice(index, 1);
        this.setToLocalHost() 
    }

    getUser = (index:number) => {  
       return this.listOfUsers[index];
    }

    updateUser = (personInfo:PersonInfo, index:number) => { 
        this.listOfUsers[index] = personInfo;  
        this.setToLocalHost() 
    }

   
}
