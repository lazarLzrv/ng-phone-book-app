import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../shared/data.service';
import { PersonInfo } from '../shared/personInfo.model'; 
import { MessagesService } from '../shared/messages.service';

@Component({
    selector: 'app-create-contact',
    templateUrl: './create-contact.component.html',
    styleUrls: ['./create-contact.component.scss']
})
export class CreateContactComponent implements OnInit {
    title:string ="Create Contact";
    contactForm: FormGroup; 
    personInfo: PersonInfo; 
    showSysMsg:boolean = false;
    userId:number; 
    config = { 
        'wheelSpeed':'0.2',
        'swipeEasing':false
    } 

    constructor(private formBuilder: FormBuilder, 
                private dataService: DataService,
                private msgService: MessagesService,
                
    ){ 
        this.dataService.setTitle(this.title)  
    }
    

    ngOnInit() {
        
        this.contactForm = this.formBuilder.group({ 
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],  
            homeNumber: ['', Validators.required], 
            officeNumber: ['', Validators.required],  
            workNumber: ['', Validators.required],  
        }); 
    } 
   

    get f() { return this.contactForm.controls; }
  
    
    reset(){ this.contactForm.reset();}

    onSubmit(){ 
        this.personInfo = {
            firstName: this.f.firstName.value,
            lastName: this.f.lastName.value,
            phoneNumbers: {
                homeNumber: this.f.homeNumber.value, 
                officeNumber: this.f.officeNumber.value, 
                workNumber: this.f.workNumber.value
            } 
        } 

        this.dataService.addToList(this.personInfo) 

        this.msgService.setSysMsgStat(true); 
        this.msgService.setSysMsg('Successfully create '+this.personInfo.firstName +" "+ this.personInfo.lastName +" contacts info !");  
       
        setTimeout(()=>{
            this.msgService.setSysMsgStat(false); 
            this.reset(); }
            ,3000);
        
    }  
}
