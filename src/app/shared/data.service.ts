import { Injectable } from '@angular/core';
import { PersonInfo } from './personInfo.model'; 
import { data } from './data.json'; 



@Injectable({
  providedIn: 'root'
})

export class DataService {
    title:string;  
    listOfUsers: any[] = data;

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
