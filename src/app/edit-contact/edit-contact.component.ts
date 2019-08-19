import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonInfo } from '../shared/personInfo.model';
import { MessagesService } from '../shared/messages.service';

@Component({
    selector: 'app-edit-contact',
    templateUrl: './edit-contact.component.html',
    styleUrls: ['./edit-contact.component.scss']
})

export class EditContactComponent implements OnInit {
    title:string ="Edit Contact"
    contactForm: FormGroup; 
    personInfo: PersonInfo; 
    userId:number;
    status:boolean;
    config = { 
        'wheelSpeed':'0.2',
        'swipeEasing':false
    } 

    constructor (private formBuilder:FormBuilder,
                private dataService: DataService,
                private msgService: MessagesService,
                private activatedRoute: ActivatedRoute,
                private router: Router
    ) {
        this.dataService.setTitle(this.title)
    } 

    ngOnInit() {
        this.userId = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
        this.personInfo = this.dataService.getUser(this.userId); 
        
        this.contactForm = this.formBuilder.group({ 
            firstName: [this.personInfo.firstName, Validators.required],
            lastName: [this.personInfo.lastName, Validators.required],  
            homeNumber: [this.personInfo.phoneNumbers.homeNumber, Validators.required], 
            officeNumber: [this.personInfo.phoneNumbers.officeNumber, Validators.required],  
            workNumber: [this.personInfo.phoneNumbers.workNumber, Validators.required],  
        });  
    } 

    get f() { return this.contactForm.controls; }

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

        this.dataService.updateUser(this.personInfo, this.userId)   

        this.msgService.setSysMsg('Successfully edited '+this.personInfo.firstName +" "+ this.personInfo.lastName +" contacts info !"); 
        this.msgService.setSysMsgStat(true); 
        
        setTimeout(()=>{
            this.msgService.setSysMsgStat(false); 
            this.router.navigate(['/list']); }
            , 3000);
        
    }  
}
