import { Injectable } from '@angular/core';
import { PersonInfo } from './personInfo.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

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
        }
    ]; 

    constructor( ) {
        this.setToLocalHost();
     }

    setToLocalHost = () =>{
        localStorage.setItem('dataSource', JSON.stringify(this.listOfUsers));  
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
